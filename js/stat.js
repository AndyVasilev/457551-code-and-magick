'use strict';
var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 150,
  Y: 20
};

var GAP = 10;
var Gap = {
  Y: 240,
  X: 90,
  FONT: 5
};

var Bar = {
  WIDTH: 40,
  HEIGHT: 150
};

var renderCloud = function (x, y, width, height, color, ctx) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

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
  renderCloud(Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT, 'rgba(0, 0, 0, 0.7)', ctx);
  renderCloud(Cloud.X - GAP, Cloud.Y - GAP, Cloud.WIDTH, Cloud.HEIGHT, '#fff', ctx);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура, вы победили!', Cloud.X + GAP, Cloud.Y + GAP * 2);
  ctx.fillText('Список результатов:', Cloud.X + GAP, Cloud.Y + GAP * 4);

  var maxTime = getMaxElement(times);
  var proportion = maxTime / Bar.HEIGHT;

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgb(255, 0, 0, 1)' : 'rgb(0, 0,' + Math.random() * 255 + ')';
    ctx.fillText(names[i], Cloud.X + GAP * 2 + Gap.X * i, GAP * 2 + Gap.Y);
    ctx.fillText(Math.round(times[i]), Cloud.X + GAP * 2 + Gap.X * i, Gap.Y - Gap.FONT - (times[i] / proportion));
    ctx.fillRect(Cloud.X + GAP * 2 + Gap.X * i, Gap.Y, Bar.WIDTH, -(times[i] / proportion));
  }
};
