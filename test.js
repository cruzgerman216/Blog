const carouselSlide = document.querySelector(".carousel-container");
const carouselImages = document.querySelectorAll(".carousel-container div");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
//Counter
let counter = 0;
//const size = carouselImages[0].clientWidth;
const getthesize = document.querySelectorAll(".getsize");
console.log(getthesize[0].clientWidth);
carouselSlide.style.transform = "translateX" + -size * counter + "px";

//Button Listeners

nextBtn.addEventListener("click", () => {
  console.log("poop");
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX" + -size * counter + "px";
  console.log(counter);
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX" + -size * counter + "px";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX" + -size * counter + "px";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX" + -size * counter + "px";
  }
});
