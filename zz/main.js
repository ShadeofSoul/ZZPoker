window.onload = function () {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1000);
};
const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  burger.classList.toggle("toggle");

  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade .5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

<<<<<<< HEAD:zz/main.js

=======
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slider-dot");
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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Change image every 2 seconds

// ++++++++++++++++++++++ FOR BURGER ++++++++++++++++++++++==
// ==========================================================
>>>>>>> 5b81d015f2fd868b8c6faa21d7e38357f1522c13:main.js
