'use strict';

(function createAutoLingoDescription() {
  var divTag = document.getElementById('autolingo-text');

  function createText(text) {
    var pTag = document.createElement("p");
    var textNode = document.createTextNode(text);
    pTag.appendChild(textNode);
    divTag.appendChild(pTag);
  }

  var autoLingoText = [];

  autoLingoText.push(
    'Real-time translation web app, that allows users of different languages to communicate with each other. One-on-one video chat or text-only chat rooms.'
  );
  autoLingoText.push(
    'Built with: React.js, Redux, Express.js, Node.js and Socket.io.'
  );

  autoLingoText.forEach(function (text) {
    createText(text)
  });

})();
