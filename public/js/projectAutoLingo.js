'use strict';

$(document).ready(function createAutoLingoDescription() {

  function createText(text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  }

  var divTag = $('#autolingo-text');
  var autoLingoText = [];

  autoLingoText.push(
    'AutoLingo is a web application that allows multiple users speaking different languages to communicate with each other in real time. A user selects their desired language, then enters a Group Chat room and can also start a one-on-one Video Chat.'
  );
  autoLingoText.push(
    'Group Chat - Multiple users can enter a chat room and speak any language they select. Any messages received in a different language, will be translated into the user’s selected language, then displayed on their conversation log.'
  );
  autoLingoText.push(
    'Video Chat - Two users can speak with each other via a video/audio display. Each user’s words are transcribed into text, translated into the other user’s language, and then rendered on each user’s screen in the language they selected.'
  );
  autoLingoText.push(
    'Built with: React.js, Redux, Express.js, Node.js and Socket.io.'
  );

  autoLingoText.forEach(function (text) {
    createText(text)
  });

});
