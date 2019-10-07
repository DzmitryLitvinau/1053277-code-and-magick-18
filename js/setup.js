'use strict';
(function () {
  var WIZARDS_AMOUNT = 4;
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(101, 137, 164)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomSpecs = function (firstNames, surNames, eyesColors, coatColors) {
    var randomFirstName = firstNames[window.util.getRandomIntInclusive(0, firstNames.length - 1)];
    var randomSurName = surNames[window.util.getRandomIntInclusive(0, surNames.length - 1)];
    var randomFullName = randomSurName + ' ' + randomFirstName;
    var randomNumber = window.util.getRandomIntInclusive(0, 1);
    if (randomNumber) {
      randomFullName = randomFirstName + ' ' + randomSurName;
    }
    var randomSpecs = {
      fullName: randomFullName,
      eyeColor: eyesColors[window.util.getRandomIntInclusive(0, eyesColors.length - 1)],
      coatColor: coatColors[window.util.getRandomIntInclusive(0, coatColors.length - 1)],
    };
    return randomSpecs;
  };

  var wizards = [];

  for (i = 0; i < WIZARDS_AMOUNT; i++) {
    var wizardSpec = getRandomSpecs(WIZARD_FIRST_NAMES, WIZARDS_SURNAMES, WIZARDS_EYES_COLORS, WIZARS_COAT_COLORS);
    wizards.push(wizardSpec);
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.fullName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

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
