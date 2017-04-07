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
    'AutoLingo is a web application that allows multiple users speaking different languages to communicate with each other in real time. Multiple users can chat to each other in different languages via a text-only chat room, and all messages are rendered on the user’s screen in their selected language. Users can also start a one-on-one video/audio chat. Each user’s spoken words are transcribed into text, translated, then displayed on the message log in the languageeach user’s screen in the language they selected.'
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
