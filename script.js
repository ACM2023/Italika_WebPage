const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

let counter = 0;
const totalSlides = carouselImages.length;
const slideWidth = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

function nextSlide() {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

  // Reiniciar el carrusel después de mostrar la última imagen
  if (counter === totalSlides) {
    setTimeout(() => {
      carouselSlide.style.transition = "none";
      counter = 0;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }, 400);
  }
}

setInterval(nextSlide, 3000);

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}