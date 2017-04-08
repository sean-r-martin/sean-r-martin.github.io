'use strict';

(function createNaviDescription() {
  var divTag = document.getElementById('techtalk-text');
  var pTag = document.createElement("p");
  var textNode = document.createTextNode(
    'ES6 has introduced a series of additional features to the language of JavaScript. In this tech talk, I focus on the practical uses of Maps, Sets and Symbols.'
  );

  pTag.appendChild(textNode);
  divTag.appendChild(pTag);
})();
