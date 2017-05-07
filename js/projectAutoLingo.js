'use strict';

$(document).ready(function createAutoLingoDescription() {

  var divTag = $('#autolingo-text');
  var autoLingoText = [];

  autoLingoText.push(
    'A web application that proivdes live language translation in real-time. Multiple users can speek to each other in a text-only group chat, and all messages received will be translated into their own language. Users can also initiate a one-on-one Video Chat, with live speech translation.'
  );
  autoLingoText.push(
    'Built with - React.js, Redux, Express.js, Node.js and Socket.io.'
  );
  autoLingoText.push(
    'Technologies used - Web RTC (video audio component), Web Speech API (speech-to-text), and Google Translate (language translation)'
  );

  autoLingoText.forEach(function (text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  });

});
