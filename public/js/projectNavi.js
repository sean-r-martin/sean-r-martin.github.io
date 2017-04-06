'use strict';

(function createNaviDescription() {

  function createText(elementId, text) {
    var elementTag = document.getElementById(elementId);
    var textNode = document.createTextNode(text);
    elementTag.appendChild(textNode);
  }

  var naviText = [];

  naviText.push(
    'Navi is a web application for finding information about upcoming events around New York City. When a user logs onto the website, current event information is queried from various APIs, and rendered on the events list. Event information is also integrated with the Google Maps API, to render indicators on the map for each event location.'
  );
  naviText.push(
    'Built with: React.js, Redux, Express.js, and Node.js.'
  );
  naviText.push(
    'Event Information APIs used: Eventful.com, Meetup.com, NYC Developer Portal.'
  );

  naviText.forEach(function (text, index) {
    var elementId = 'navi-text' + index;
    createText(elementId, text);
  });

})();
