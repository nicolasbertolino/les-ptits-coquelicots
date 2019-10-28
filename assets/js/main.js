const cursor = document.querySelector(".cursor");
let link = document.querySelector(".logo");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

link.addEventListener("mouseenter", e => {
  cursor.classList.toggle("expand");
});

link.addEventListener("mouseleave", e => {
  cursor.classList.remove("expand");
});

// Hamburger
function toggleBurger(x) {
  x.classList.toggle("change");
}

// Toggle Responsive Menu
const navShow = () => {
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
};

navShow();

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Tabs
function openTab(evt, tabName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" ontab", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " ontab";
}

// Back To Top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}