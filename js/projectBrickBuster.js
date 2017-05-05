'use strict';

$(document).ready(function createBrickBusterDescription() {

  function createText(text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  }

  var divTag = $('#brick-buster-text');
  var brickBusterText = [];

  brickBusterText.push(
    'A web based version of the classic 2D game Breakout!'
  );
  brickBusterText.push(
    'Built with: ES6 JavaScript, Babel, Webpack and Node.js.'
  );

  brickBusterText.forEach(function (text) {
    createText(text);
  });

});
