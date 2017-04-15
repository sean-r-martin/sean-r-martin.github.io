'use strict';

$(document).ready(function createNaviDescription() {

  function createText(text) {
    var pTag = $("<p></p>").text(text);
    divTag.append(pTag);
  }

  var divTag = $('#story-text');
  var storyText = [];

  storyText.push(
    "I'm Sean Martin, a former Accountant, who recently transitioned into Software Engineering. While I liked accounting, I've always had a passion for coding. So, to help me break into the field, I decided to attend a coding bootcamp called Fullstack Academy. There, I learned full stack web development using JavaScript via Node.js, along with React, Redux, and PostgreSQL. Now, I'm looking for my first full time position in the field."
  );
  storyText.push(
    'I love solving problems through code, and creating meaningful applications. I have the skills to work with both frontend and backend technologies, and I value a test driven development style.'
  );
  storyText.push(
    'In my free time, I work on side projects, practice Muay Thai, play in a kickball league, and cycle in bike tours around NYC.'
  );

  storyText.forEach(function (text) {
    createText(text);
  });

});
