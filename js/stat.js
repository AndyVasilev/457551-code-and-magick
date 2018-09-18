'use strict';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10
};

var Chart = {
  WIDTH: 40,
  HEIGHT: 150,
  X: 145,
  Y: 240,
  BETWEEN: 50
};

var renderCloud = function (ctx, x, y, width, height, color) {
  var currentColor = color || '#000000';

  ctx.fillStyle = currentColor;
  ctx.fillRect(x, y, width, height);
};

var renderText = function (ctx, text, x, y, color, font) {
  var currentColor = color || '#000000';
  var currentFont = font || '16px PT Mono';

  ctx.font = currentFont;
  ctx.fillStyle = currentColor;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {

  var MARGIN = 15;

  var drawCloud = function (x, y, width, height) {
    renderCloud(ctx, x + MARGIN, y + MARGIN, width, height, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, x, y, width, height, 'rgb(255, 255, 255)');
  };

  var drawInfo = function (arr, y) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(arr, Chart.WIDTH * j + Chart.BETWEEN * j + Chart.X, y);
  };

  drawCloud(Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT);

  renderText(ctx, 'Ура вы победили!', 155, 45);
  renderText(ctx, 'Список результатов:', 155, 65);

  var topTimes = 0;
  for (var i = 0; i <= times.lenght - 1; i += 1) {
    if (times[i] > topTimes) {
      topTimes = Math.floor(times[i]);
    }
  }
  for (var j = 0; j <= names.lenght - 1; j += 1) {
    renderCloud(ctx, Chart.WIDTH * j + Chart.BETWEEN * j + Chart.X, Chart.Y, Chart.WIDTH, -(Chart.HEIGHT * times[j]) / topTimes, (names[j] === 'вы') ? '#FF0000' : 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')');

    drawInfo(Math.floor(times[j]), Chart.HEIGHT * 1.55 - (Chart.HEIGHT * times[j]) / topTimes);
    drawInfo(names[j], 260);
  }
};
