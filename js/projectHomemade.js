'use strict';

$(document).ready(function createHomemadeDescription() {

  var divTag = $('#homemade-text');
  var homemadeText = [];

  homemadeText.push(
    "An online Recipe book, with access to over 1.5 million recipes. Search for recipes based on the types provided or use the search bar to find your own."
  );
  homemadeText.push(
    'Built with - React, Redux, Express.js and Node.js'
  );

  homemadeText.forEach(function (text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  });

});
