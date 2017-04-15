'use strict';

$(document).ready(function createSkillList() {

  function createSkill(skill, divTag) {
    var pTag = $("<p></p>").text(skill);
    divTag.append(pTag);
  }

  var clientSkills = [
    'JavaScript (ES6)',
    'React.js',
    'Redux',
    'HTML5',
    'CSS3',
    'AJAX',
    'jQuery',
    'Bootstrap'
  ];

  var serverSkills = [
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Sequelize',
    'Mocha',
    'Chai',
    'Git',
    'Ruby',
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
