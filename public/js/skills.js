'use strict';

(function createSkillList() {

  var divTag1 = document.getElementById('skill-list1');
  var divTag2 = document.getElementById('skill-list2');
  // divTag1.className = 'list';
  // divTag2.className = 'list';

  function createSkill(skill, divTag) {
    var listItem = document.createElement("p");
    var textNode = document.createTextNode(skill);
    listItem.appendChild(textNode);
    divTag.appendChild(listItem);
  }

  var skillList1 = [
    'JavaScript (ES6)',
    'React.js',
    'Redux',
    'HTML5',
    'CSS3',
    'Sass',
    'AJAX',
    'jQuery',
    'Bootstrap'
  ];

  var skillList2 = [
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Sequelize',
    'Mocha',
    'Chai',
    'Git',
    'Ruby',
    'Socket.io'
  ];

  skillList1.forEach(function (skill) {
    createSkill(skill, divTag1);
  });
  skillList2.forEach(function (skill) {
    createSkill(skill, divTag2);
  });

})();
