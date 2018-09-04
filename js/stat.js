'use strict';
var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10
};

var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = Cloud.WIDTH - GAP - TEXT_WIDTH - GAP;

// Функция отрисовки облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
};

// Поиск максимального значения
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, Cloud.X + GAP, Cloud.Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, Cloud.X, Cloud.Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 45);
  ctx.fillText('Список результатов:', 125, 65);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], Cloud.X + GAP, Cloud.Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(Cloud.X + GAP + TEXT_WIDTH, Cloud.Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }
};
