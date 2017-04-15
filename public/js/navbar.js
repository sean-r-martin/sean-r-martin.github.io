'use strict';

$(document).ready(function navBarScrollLock() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $('nav').addClass('nav-background-color');
    }
    if ($(window).scrollTop() < 201) {
      $('nav').removeClass('nav-background-color');
    }
  });


  $("#contact-link").click(function() {
    $('html,body').animate({
        scrollTop: $("header").offset().top},
        'slow'
      );
  });

  $("#story-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#story-section").offset().top},
        'slow'
      );
  });

  $("#skills-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#skill-section").offset().top},
        'slow'
      );
  });

  $("#projects-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects-section").offset().top},
        'slow'
      );
  });

});
