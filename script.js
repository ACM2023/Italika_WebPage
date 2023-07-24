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

