'use strict';

(function createNaviDescription() {
  var elementTag = document.getElementById('techtalk-text');
  var textNode = document.createTextNode(
    'ES6 has introduced a series of additional features to the language of JavaScript. In this tech talk, Sean focuses on the practical uses of Maps, Sets and Symbols. Maps are new objects that are useful for storing a collection of data in key/value pairs. Sets are also new objects, but are useful for storing a collection of unique values, and Symbols are a new primitive data type.'
  );

  elementTag.appendChild(textNode);
})();
