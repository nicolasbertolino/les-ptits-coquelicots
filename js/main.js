// Add class 'scrolled' to body on scroll
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
}

// Responsive navbar with hamburger and overlay
let navResponsive = document.getElementsByTagName("nav")[0];
let hamburgerMenu = document.getElementsByClassName("hamburger")[0];
let overlayMenu = document.getElementsByClassName("overlay")[0];
hamburgerMenu.addEventListener("click", function() {
  navResponsive.classList.toggle("open");
  overlayMenu.classList.toggle("appear");
  this.classList.toggle("isOpened");
});
overlayMenu.addEventListener("click", function() {
  navResponsive.classList.remove("open");
  this.classList.remove("appear");
  hamburgerMenu.classList.remove("isOpened");
});
