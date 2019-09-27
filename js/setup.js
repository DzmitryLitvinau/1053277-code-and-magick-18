'use strict';

var WIZARDS_AMOUNT = 4;
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(101, 137, 164)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

var getRandomSpecs = function (firstNames, surNames, eyesColors, coatColors) {
  var randomSpecs = {};
  var randomFirstName = firstNames[getRandomIntInclusive(0, firstNames.length - 1)];
  var randomSurName = surNames[getRandomIntInclusive(0, surNames.length - 1)];
  var randomEyesColor = eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)];
  var randomCoatColor = coatColors[getRandomIntInclusive(0, coatColors.length - 1)];
  var randomFullName = randomSurName + ' ' + randomFirstName;
  var randomNumber = getRandomIntInclusive(0, 1);
  if (randomNumber) {
    randomFullName = randomFirstName + ' ' + randomSurName;
  }
  randomSpecs.fullName = randomFullName;
  randomSpecs.eyeColor = randomEyesColor;
  randomSpecs.coatColor = randomCoatColor;

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
