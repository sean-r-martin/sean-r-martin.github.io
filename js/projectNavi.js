'use strict';

$(document).ready(function createNaviDescription() {

  var divTag = $('#navi-text');
  var naviText = [];

  naviText.push(
    'A web application for finding information about upcoming events in New York City. When a user logs onto the website, current event information is queried from various APIs, and rendered on the events list. An Indicator for each event location is also rendered on a google map.'
  );
  naviText.push(
    'Built with - React.js, Redux, Express.js, Node.js, and Google Maps API.'
  );
  naviText.push(
    'APIs used for Event data - Eventful.com, Meetup.com, NYC Developer Portal.'
  );

  naviText.forEach(function (text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  });

});
