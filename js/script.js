var enBlock = document.querySelector(".lang-en-link");

var ruBlock = document.querySelector(".lang-ru-link");

var welcome = document.querySelector(".welcome-toggle");

var welcomeBtn = document.querySelector(".welcome-btn");

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
  welcome.classList.toggle("welcome-toggle-on");
  welcomeBtn.classList.toggle("welcome-btn-up");
});