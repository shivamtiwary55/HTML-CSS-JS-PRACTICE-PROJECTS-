const slides = document.querySelectorAll(".hero-slider-image");

let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}, 1500);
