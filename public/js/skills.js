'use strict';

(function createSkillList() {

  var clientTag = document.getElementById('clientside-skills');
  var serverTag = document.getElementById('serverside-skills');

  function createSkill(skill, divTag) {
    var listItem = document.createElement("p");
    var textNode = document.createTextNode(skill);
    listItem.appendChild(textNode);
    divTag.appendChild(listItem);
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

  clientSkills.forEach(function (skill) {
    createSkill(skill, clientTag);
  });
  serverSkills.forEach(function (skill) {
    createSkill(skill, serverTag);
  });

})();
