var enBlock = document.querySelector('.language-switcher__lang-link--en');
var ruBlock = document.querySelector('.language-switcher__lang-link--ru');

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var resumeToggle = document.querySelector('.resume__button');
var resumeIconUp = document.querySelector('.resume__button-icon--up');

var aboutMeBtn = document.querySelector('.about-me__btn');
var aboutMeBtnMore = document.querySelector('.about-me__btn--more');
var aboutMeBtnLess = document.querySelector('.about-me__btn--less');
var aboutMeToggle = document.querySelector('.about-me__toggle');
var skillset = document.querySelector('.skillset');

navMain.classList.remove('main-nav--nojs');
resumeToggle.classList.remove('resume__button--nojs');
aboutMeBtn.classList.remove('about-me__btn--nojs');
aboutMeBtnLess.style.display = 'none';

enBlock.addEventListener('mouseenter', function(event) {
  event.preventDefault();
  ruBlock.classList.add('lang-en-link-hover');
});

enBlock.addEventListener('mouseleave', function(event) {
  event.preventDefault();
  ruBlock.classList.remove('lang-en-link-hover');
});

ruBlock.addEventListener('mouseenter', function(event) {
  event.preventDefault();
  enBlock.classList.add('lang-ru-link-hover');
});

ruBlock.addEventListener('mouseleave', function(event) {
  event.preventDefault();
  enBlock.classList.remove('lang-ru-link-hover');
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

document.getElementById('button-up').style.display = 'none';

resumeToggle.addEventListener('click', function() {

  if (resumeToggle.classList.contains('resume__button--on')) {
    resumeToggle.classList.remove('resume__button--on');
    resumeToggle.classList.add('resume__button--off');
    document.getElementById('button-up').style.display = 'none';
    document.getElementById('button-down').style.display = 'block';
  }

  else {
    resumeToggle.classList.add('resume__button--on');
    resumeToggle.classList.remove('resume__button--off');
    document.getElementById('button-up').style.display = 'block';
    document.getElementById('button-down').style.display = 'none';
  }
});

aboutMeBtnMore.addEventListener('click', function() {

  aboutMeToggle.classList.remove('about-me__toggle--off');
  aboutMeToggle.classList.add('about-me__toggle--on');
  skillset.classList.remove('skillset--visible');
  skillset.classList.add('skillset--hidden');
  aboutMeBtnMore.style.display = 'none';
  aboutMeBtnLess.style.display = 'inline';

});

aboutMeBtnLess.addEventListener('click', function() {

  aboutMeToggle.classList.remove('about-me__toggle--on');
  aboutMeToggle.classList.add('about-me__toggle--off');
  skillset.classList.add('skillset--visible');
  skillset.classList.remove('skillset--hidden');
  aboutMeBtnMore.style.display = 'inline';
  aboutMeBtnLess.style.display = 'none';

});

//Anchor tag scroll, credits to http://markrabey.com

window.scrollTo = (function () {
  var timer, start, factor;

  return function (target, duration) {
    var offset = window.pageYOffset,
        delta  = target - window.pageYOffset;
    duration = duration || 300;
    start = Date.now();
    factor = 0;

    if( timer ) {
      clearInterval(timer);
    }

    function step() {
      var y;
      factor = (Date.now() - start) / duration;
      if( factor >= 1 ) {
        clearInterval(timer);
        factor = 1;
      }
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }

    timer = setInterval(step, 10);
    return timer;
  };
}());

var welcomeLink = document.querySelector('[href="#welcome"]');
welcomeLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(document.getElementById('welcome').offsetTop);
}, false);

var profileLink = document.querySelector('[href="#profile"]');
profileLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(document.getElementById('profile').offsetTop);
}, false);

var resumeLink = document.querySelector('[href="#resume"]');
resumeLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(document.getElementById('resume').offsetTop);
}, false);

var portfolioLink = document.querySelector('[href="#portfolio"]');
portfolioLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(document.getElementById('portfolio').offsetTop);
}, false);
