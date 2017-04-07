var enBlock = document.querySelector(".language-switcher__lang-link--en");

var ruBlock = document.querySelector(".language-switcher__lang-link--ru");

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
