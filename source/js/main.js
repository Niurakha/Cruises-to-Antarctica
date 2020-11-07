'use strict';

var header = document.querySelector('.header-top');
var navToggle = document.querySelector('.main-nav__toggle');

header.classList.remove('header-top--nojs');
header.classList.remove('header-top--opened');
header.classList.add('header-top--closed');

navToggle.addEventListener('click', function () {
  if (header.classList.contains('header-top--opened')) {
    header.classList.remove('header-top--opened');
    header.classList.add('header-top--closed');
  } else {
    header.classList.add('header-top--opened');
    header.classList.remove('header-top--closed');
  }
});
