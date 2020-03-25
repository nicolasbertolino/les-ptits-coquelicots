function leaveTransition() {
  gsap.to("header", { duration: 0.3, opacity: 0, ease: "power3" });
  gsap.to("main", { duration: 0.3, opacity: 0, ease: "power3" });
}

function contentAnimation() {
  gsap.from("header div:first-child", { duration: 0.5, opacity: 0, ease: "power3" });
  gsap.to("header div:last-child", { duration: 1, clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power3" });
  gsap.from("main", { duration: 0.5, opacity: 0, ease: "power3" });
}

function delay(n) {
  n = n || 1000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        leaveTransition();
        await delay(400);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      }
    }
  ]
});

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 17) + "px; left: " + (e.pageX - 17) + "px;"
  );
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseenter", () => cursor.classList.add("condense"));
  link.addEventListener("mouseleave", () =>
    cursor.classList.remove("condense")
  );
});

// Hamburger
function toggleBurger(e) {
  e.classList.toggle("change");
}

// Toggle Responsive Menu
const navShow = () => {
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    menu.classList.toggle("show");
    let tl = new TimelineLite();
    tl.staggerFrom(
      ".menu a",
      1,
      {
        y: "50%",
        opacity: 0,
        ease: Expo.easeOut
      },
      0.1,
      "+=0.5"
    );
  });
};

navShow();

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// Tabs
function openTab(evt, tabName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabs__link");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" ontab", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " ontab";
}

// Back To Top
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
