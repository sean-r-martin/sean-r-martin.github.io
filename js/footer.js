'use strict';

$(document).ready(function createFooterSignature() {
  var date = new Date;
  var year = date.getFullYear();

  $('#footer-signature').text("© " + year +" Sean Martin");
});
