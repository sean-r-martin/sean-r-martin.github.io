'use strict';

$(document).ready(function createNaviDescription() {

  var text = 'ES6 has introduced a series of additional features to the language of JavaScript. In this tech talk, I focus on the practical uses of Maps, Sets and Symbols.'

  var pTag = $("<p></p>").text(text);
  $('#techtalk-text').append(pTag);
});
