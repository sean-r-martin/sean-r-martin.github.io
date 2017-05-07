'use strict';

$(document).ready(function createBrickBusterDescription() {

  var divTag = $('#brick-buster-text');
  var brickBusterText = [];

  brickBusterText.push(
    "A web based version of the classic 2D game Breakout. See if you can bust 'em all!"
  );
  brickBusterText.push(
    'Built with - HTML5 Canvas, ES6 JavaScript, Babel, Webpack and Node.js.'
  );

  brickBusterText.forEach(function (text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  });

});
