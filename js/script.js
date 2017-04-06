var enBlock = document.querySelector(".language-switcher__lang-link--en");

var ruBlock = document.querySelector(".language-switcher__lang-link--ru");

var welcome = document.querySelector(".welcome__toggle");

var welcomeBtn = document.querySelector(".welcome__btn");

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

welcomeBtn.addEventListener("click", function(event) {
  event.preventDefault();
  welcome.classList.toggle("welcome__toggle--on");
  welcomeBtn.classList.toggle("welcome__btn--up");
});
