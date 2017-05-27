'use strict';

$(document).ready(function createPrimeRoboticsDescription() {

  var divTag = $('#prime-robotics-text');
  var primeRoboticsText = [];

  primeRoboticsText.push(
    "A mock landing page for a technlogoy company. This project was created to practice styling web pages with HTML and CSS."
  );
  primeRoboticsText.push(
    'Built with - HTML5, CSS3, Flexbox and jQuery.'
  );

  primeRoboticsText.forEach(function (text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  });

});
