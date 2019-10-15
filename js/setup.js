'use strict';
(function () {
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(101, 137, 164)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);

  var responseHandler = function () {
    userDialog.classList.add('hidden');
  };

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), responseHandler, errorHandler);
    evt.preventDefault();
  });

  var setupWizard = document.querySelector('.setup-wizard');
  var setupCoat = setupWizard.querySelector('.wizard-coat');
  var setupEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballsWrap = document.querySelector('.setup-fireball-wrap');
  var setupWizardApperiance = document.querySelector('.setup-wizard-appearance');
  var setupWizardInputs = setupWizardApperiance.querySelectorAll('input');
  var setupFireballInput = setupFireballsWrap.querySelector('input');

  var onChangeCoatClick = function (coat, color) {
    coat.addEventListener('click', function () {
      coat.style.fill = color[window.util.getRandomIntInclusive(0, color.length - 1)];
      setupWizardInputs[0].value = coat.style.fill;
    });
  };

  onChangeCoatClick(setupCoat, WIZARS_COAT_COLORS);

  var onChangeEyesClick = function (eyes, color) {
    eyes.addEventListener('click', function () {
      eyes.style.fill = color[window.util.getRandomIntInclusive(0, color.length - 1)];
      setupWizardInputs[1].value = eyes.style.fill;
    });
  };

  onChangeEyesClick(setupEyes, WIZARDS_EYES_COLORS);

  var onChangeFireballsClick = function (fireballs, color) {
    fireballs.addEventListener('click', function () {
      setupFireballInput.value = color[window.util.getRandomIntInclusive(0, color.length - 1)];
      fireballs.style.backgroundColor = setupFireballInput.value;
    });
  };

  onChangeFireballsClick(setupFireballsWrap, WIZARDS_FIREBALL_COLORS);

})();
