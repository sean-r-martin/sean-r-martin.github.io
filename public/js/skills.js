'use strict';

(function createSkillList() {

  var ulTag = document.getElementById('skill-list');
  // var ulTag1 = document.getElementById('skill-list1');
  // var ulTag2 = document.getElementById('skill-list2');
  // ulTag1.className = 'list';
  // ulTag2.className = 'list';

  function createSkill(skill) {
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(skill);
    listItem.appendChild(textNode);
    ulTag.appendChild(listItem);
  }

  var skills = [
      'JavaScript (ES6)',
      'React.js',
      'Redux',
      'HTML5',
      'CSS3',
      'Sass',
      'jQuery',
      'Bootstrap',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'Mocha / Chai',
      'Git',
      'Ruby',
      'Socket.io'
  ];

  skills.forEach(function (skill) {
    createSkill(skill);
  });
  // skillList2.forEach(function (skill) {
  //   createSkill(skill, ulTag2);
  // });

})();


// var skillList1 = [
//   'JavaScript (ES6)',
//   'React.js',
//   'Redux',
//   'HTML5',
//   'CSS3',
//   'Sass',
//   'jQuery',
//   'Bootstrap'
// ];
//
// var skillList2 = [
//   'Express.js',
//   'Sequelize',
//   'Node.js',
//   'PostgreSQL',
//   'Git',
//   'Ruby',
//   'Mocha / Chai',
//   'Socket.io'
// ];
