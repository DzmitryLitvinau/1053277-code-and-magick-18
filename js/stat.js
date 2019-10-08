'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var X_GAP = 20;
  var Y_GAP = 22;
  var FONT_GAP = 16;
  var COLUMN_GAP = 50;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    var fillWrapText = window.util.wrapText('Ура вы победили! Список результатов:', 16);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(fillWrapText[0], CLOUD_X + X_GAP, CLOUD_Y + Y_GAP + GAP);
    ctx.fillText(fillWrapText[1], CLOUD_X + X_GAP, CLOUD_Y + Y_GAP + (3 * GAP));
    var maxTime = window.util.getMaxElement(times);
    var diff = players.length - times.length;

    if (players.length > times.length) {
      players.splice(players.length - diff, diff);
    } else {
      times.splice(times.length + diff, Math.abs(diff));
    }

    for (var i = 0; i < players.length; i++) {
      ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - Y_GAP - FONT_GAP + (-BAR_HEIGHT * times[i]) / maxTime);
    }

    for (var j = 0; j < players.length; j++) {
      if (players[j] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        var randomSaturation = window.util.getRandomIntInclusive(0, 100) + '%';
        ctx.fillStyle = 'hsl(240,' + randomSaturation + ', 50%)';
      }
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMN_GAP) * j, CLOUD_HEIGHT - GAP - Y_GAP, BAR_WIDTH, (-BAR_HEIGHT * times[j]) / maxTime);
    }
  };
})();
