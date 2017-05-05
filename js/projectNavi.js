'use strict';

$(document).ready(function createNaviDescription() {

  function createText(text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  }

  var divTag = $('#navi-text');
  var naviText = [];

  naviText.push(
    'Navi is a web application for finding information about upcoming events around New York City. When a user logs onto the website, current event information is queried from various APIs, and rendered on the events list. Event information is also integrated with the Google Maps API, so indicators are shown on a google map to indicate each event location.'
  );
  naviText.push(
    'Built with: React.js, Redux, Express.js, and Node.js.'
  );
  naviText.push(
    'Event Information APIs used: Eventful.com, Meetup.com, NYC Developer Portal.'
  );

  naviText.forEach(function (text) {
    createText(text);
  });

});
