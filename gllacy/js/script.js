var link = document.querySelector(".btn-feedback");

var popup = document.querySelector(".feedback");

var nameForm = popup.querySelector("[name=name]");

var overlay = document.querySelector(".modal-overlay");

var close = popup.querySelector(".feedback-close");

var dropdown = document.querySelector(".dropdown-container");

var navbar = document.querySelector(".navbar-link");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-show");
  overlay.classList.add("modal-overlay-show");
  nameForm.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-show");
  overlay.classList.remove("modal-overlay-show");
});

dropdown.addEventListener("mouseenter", function(event) {
  event.preventDefault();
  navbar.classList.add("navbar-link-hover");
});

dropdown.addEventListener("mouseleave", function(event) {
  event.preventDefault();
  navbar.classList.remove("navbar-link-hover");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});