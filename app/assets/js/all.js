$(document).ready(function () {
  $('.hamburgerMenu').click(function (e) { 
      e.preventDefault();
  });
  
  $('.hamburgerMenu').click(function () { 
      $('body').toggleClass('navbar-nav_show');
  });
});