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
  var currentColor = color || '#000000';
  ctx.fillStyle = currentColor;
  ctx.fillRect(x, y, width, height);
};

var renderText = function (x, y, color, text, ctx) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
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

  var drawCloud = function (x, y, width, height) {
    renderCloud(Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT, 'rgba(0, 0, 0, 0.7)', ctx);
    renderCloud(Cloud.X - GAP, Cloud.Y - GAP, Cloud.WIDTH, Cloud.HEIGHT, '#fff', ctx);
  };


  var maxTime = getMaxElement(times);

  var renderLengthText = function (text, fontStyle, color) {
    var textLength = text.length;
    ctx.font = fontStyle;
    ctx.fillStyle = color;
    for (var i = 0; i < textLength; i++) {
      ctx.fillText(text[i], Cloud.X + GAP, Cloud.Y + GAP * i);
    }
  };

  var textStyle = '16px PT Mono';
  var textColor = '#000';
  var textStrings = ['Ура вы победили!', 'Список результатов:'];

  renderLengthText(textStyle, textColor, textStrings);

  var calculateColumn = function () {
    return Cloud.X + GAP * 2 + Gap.X * i;
  };

  var proportion = maxTime / Bar.HEIGHT;

  for (var i = 0; i < names.length; i++) {
    var currentColor = (names[i] === 'Вы') ? 'rgb(255, 0, 0, 1)' : 'rgb(0, 0,' + Math.random() * 255 + ')';
    renderText(names[i], textColor, calculateColumn(), GAP * 2 + Gap.Y, ctx);
    renderText(Math.round(times[i]), textColor, calculateColumn(), Gap.Y - Gap.FONT - (times[i] / proportion), ctx);
    renderCloud(calculateColumn(), Gap.Y, Bar.WIDTH, -(times[i] / proportion), currentColor, ctx);
  }
};
