let slideIndex = 1;
let myTimer;
let slideshowContainer;
let pause;
let resume;

window.addEventListener("load", () => {
  showSlides(slideIndex);
  myTimer = setInterval(() => {
    plusSlides(1);
  }, 4000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowContainer = document.getElementsByClassName("slideshow-inner")[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

  slideshowContainer.addEventListener("mouseenter", pause);
  slideshowContainer.addEventListener("mouseleave", resume);
});
// NEXT AND PREVIOUS CONTROL
const plusSlides = (n) => {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  if (n === -1) {
    myTimer = setInterval(() => {
      plusSlides(n + 2);
    }, 4000);
  } else {
    myTimer = setInterval(() => {
      plusSlides(n + 1);
    }, 4000);
  }
};
const showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};
window.addEventListener("load", () => {
  showSlides(slideIndex);
  myTimer = setInterval(() => plusSlides(1), 4000);
});

//Controls the current slide and resets interval if needed
const currentSlide = (n) => {
  clearInterval(myTimer);
  myTimer = setInterval(() => plusSlides(n + 1), 4000);
  showSlides((slideIndex = n));
};

slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
slideshowContainer.addEventListener("mouseenter", pause);
slideshowContainer.addEventListener("mouseleave", resume);
pause = () => {
  clearInterval(myTimer);
};
resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(() => plusSlides(slideIndex), 4000);
};

const CheckBoxShortList = (x, y, z) => {
  //  var slide = '';
  var arr = [];
  arr.push(x + "," + y + "," + z); // length is 1
  console.log(arr);
  console.log("Length:", arr.length);
};

const title1 = document.querySelector(".container-title1");
title1.addEventListener("click", () => switchTab("text1"));
const title2 = document.querySelector(".container-title2");
title2.addEventListener("click", () => switchTab("text2"));
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const img1 = document.querySelector(".img1");
console.log(img1);
const img2 = document.querySelector(".img2");
console.log(img2);

const switchTab = (tab) => {
  if (tab === "text1") {
    text1.style.display = "block";
    text2.style.display = "none";
    title2.style.backgroundColor = "var(--color-maroon)";
    title1.style.backgroundColor = "var(--color-maroon-foncé)";
    img1.style.display = "block";
    img2.style.display = "none";
  } else {
    text1.style.display = "none";
    text2.style.display = "block";
    title1.style.backgroundColor = "var(--color-maroon)";
    title2.style.backgroundColor = "var(--color-maroon-foncé)";
    img2.style.display = "block";
    img1.style.display = "none";
  }
};
