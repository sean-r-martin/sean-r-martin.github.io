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
    'AutoLingo is a real-time translation web application, that allows users of different languages to communicate with each other. The video chat features live speech-to-text translations and the group chat features live text-only translation.'
  );
  autoLingoText.push(
    'Built with: React.js, Redux, Express.js, Node.js and Socket.io.'
  );
  autoLingoText.push(
    'Speech and Translation Technologies used: Web RTC (video and audio), Web Speech API (speech-to-text), Google Translation API.'
  );

  autoLingoText.forEach(function (text) {
    createText(text)
  });

})();
