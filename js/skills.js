'use strict';

$(document).ready(function createSkillList() {

  function createSkill(skill, divTag) {
    var pTag = $("<p></p>").text(skill);
    divTag.append(pTag);
  }

  var clientSkills = [
    'JavaScript',
    'React.js',
    'Redux',
    'jQuery',
    'HTML5',
    'CSS3',
    'Jest',
    'Git'
  ];

  var serverSkills = [
    'Ruby',
    'Python',
    'Java',
    'Rails',
    'Node.js',
    'Express.js',
    'MySQL',
    'RSpec'
  ];

  var clientTag = $('#clientside-skills');
  var serverTag = $('#serverside-skills');

  clientSkills.forEach(function (skill) {
    createSkill(skill, clientTag);
  });
  serverSkills.forEach(function (skill) {
    createSkill(skill, serverTag);
  });

});
