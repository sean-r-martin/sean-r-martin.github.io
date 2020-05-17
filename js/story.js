'use strict';

$(document).ready(function createNaviDescription() {

  function createText(text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  }

  var divTag = $('#story-text');
  var storyText = [];

  storyText.push(
    "Hi I'm Sean Martin! I'm a software engineer who loves solving problems through code and creating interesting applications. I have the skills to work with both frontend and backend technologies and I value a Test Driven Development style."
  );
  
  storyText.push(
    'In my free time, I work on side projects, play in a kickball league, and ride my bike around NYC.'
  );

  storyText.forEach(function (text) {
    createText(text);
  });

});
