var enBlock = document.querySelector(".language-switcher__lang-link--en");

var ruBlock = document.querySelector(".language-switcher__lang-link--ru");

var navMain = document.querySelector('.main-nav');

var navToggle = document.querySelector('.main-nav__toggle');


navMain.classList.remove('main-nav--nojs');

enBlock.addEventListener("mouseenter", function(event) {
  event.preventDefault();
  ruBlock.classList.add("lang-en-link-hover");
});

enBlock.addEventListener("mouseleave", function(event) {
  event.preventDefault();
  ruBlock.classList.remove("lang-en-link-hover");
});

ruBlock.addEventListener("mouseenter", function(event) {
  event.preventDefault();
  enBlock.classList.add("lang-ru-link-hover");
});

ruBlock.addEventListener("mouseleave", function(event) {
  event.preventDefault();
  enBlock.classList.remove("lang-ru-link-hover");
});

navToggle.addEventListener('click', function() {

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }

  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
