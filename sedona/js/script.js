var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.page-header');
var submitBtn = document.querySelector('.btn-submit');
var onSubmit = document.querySelector('.form-onsubmit');
var submitClose = document.querySelector('.form-onsubmit__btn');

navMain.classList.remove('main-nav--nojs');
header.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }

  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }

  if (header.classList.contains('page-header--closed')) {
    header.classList.remove('page-header--closed');
    header.classList.add('page-header--opened');
  }

  else {
    header.classList.remove('page-header--opened');
    header.classList.add('page-header--closed');
  }
});

submitBtn.addEventListener('click', function() {
  event.preventDefault();

  if (onSubmit.classList.contains('form-onsubmit--closed')) {
    onSubmit.classList.remove('form-onsubmit--closed');
  }

  else {
    onSubmit.classList.add('form-onsubmit--closed');
  }
});

submitClose.addEventListener('click', function() {
  onSubmit.classList.add('form-onsubmit--closed');
});
