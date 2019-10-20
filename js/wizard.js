'use strict';
(function () {
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(101, 137, 164)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizard = document.querySelector('.setup-wizard');
  var setupCoat = setupWizard.querySelector('.wizard-coat');
  var setupEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballsWrap = document.querySelector('.setup-fireball-wrap');
  var setupWizardApperiance = document.querySelector('.setup-wizard-appearance');
  var setupWizardInputs = setupWizardApperiance.querySelectorAll('input');
  var setupFireballInput = setupFireballsWrap.querySelector('input');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var onChangeCoatClick = function (coat, color) {
    coat.addEventListener('click', function () {

      var newColor = color[window.util.getRandomIntInclusive(0, color.length - 1)];
      coat.style.fill = newColor;
      setupWizardInputs[0].value = coat.style.fill;
      wizard.onCoatChange(newColor);
    });
  };


  onChangeCoatClick(setupCoat, WIZARS_COAT_COLORS);

  var onChangeEyesClick = function (eyes, color) {
    eyes.addEventListener('click', function () {
      var newColor = color[window.util.getRandomIntInclusive(0, color.length - 1)];
      eyes.style.fill = newColor;
      setupWizardInputs[1].value = eyes.style.fill;
      wizard.onEyesChange(newColor);
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
  window.wizard = wizard;
  return window.wizard;
})();
