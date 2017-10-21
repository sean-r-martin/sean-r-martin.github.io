'use strict';

$(document).ready(function createNaviDescription() {

  function createText(text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  }

  var divTag = $('#story-text');
  var storyText = [];

  storyText.push(
    "I'm Sean Martin, a former Accountant who transitioned into Software Engineering. I love solving problems through code, and creating meaningful applications. I have the skills to work with both frontend and backend technologies, and I value a TDD style."
  );
  storyText.push(
    'Some of the technologies I like to use often, are JavaScript, Node.js, React.js, Redux PostgreSQL and Express.js.'
  );
  storyText.push(
    'In my free time, I work on coding side projects, practice Muay Thai, play in a kickball league, and ride my bike around NYC.'
  );

  storyText.forEach(function (text) {
    createText(text);
  });

});
