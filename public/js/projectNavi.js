'use strict';

(function createNaviDescription() {
  var divTag = document.getElementById('navi-text');

  function createText(text) {
    var pTag = document.createElement("p");
    var textNode = document.createTextNode(text);
    pTag.appendChild(textNode);
    divTag.appendChild(pTag);
  }

  var naviText = [];

  naviText.push(
    'Web app for finding upcoming events around NYC. Event information is dynamically generated and integrated with Google Maps.'
  );
  naviText.push(
    'Built with: React.js, Redux, Express.js, and Node.js.'
  );

  naviText.forEach(function (text) {
    createText(text);
  });

})();
