'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomIntInclusive: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNumber;
    },
    getMaxElement: function (arr) {
      var maxElement;
      if (arr.length < 1) {
        maxElement = 0;
      } else {
        maxElement = arr[0];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] > maxElement) {
            maxElement = arr[i];
          }
        }
      }
      return maxElement;
    },
    wrapText: function (text, symNumber) {
      var mText = [];
      if (text.length > symNumber) {
        mText.push(text.slice(0, symNumber++));
        text = text.slice(symNumber++);
      }
      mText.push(text);
      return mText;
    },
  };
})();
