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
    'AutoLingo is a web application that allows multiple users speaking different languages to communicate with each other in real time. All a user needs to do is select their desired language and enter a Group Chatroom or start a 1-on-1 Video Chat.'
  );
  autoLingoText.push(
    'Group Chat - Multiple users can enter a chat room and speak any language they select. Any messages received in a different language, will be translated into the user’s selected language, then displayed on their own unique conversation log.'
  );
  autoLingoText.push(
    'Video Chat - Two users can speak with each other via an audio/video display. Each user’s words are transcribed into text, translated into the other user’s language, and then rendered on each user’s screen in the language they selected.'
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
