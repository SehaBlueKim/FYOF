// 인기 향수 스와이퍼
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

var collectionSwiper = new Swiper(".collectionSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    clickable: true,
  },
});

const hearts = document.querySelectorAll(".heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    if (heart.src.includes("empty-heart.svg")) {
      heart.src = "./img/filled-heart.svg";
      heart.style.filter =
        "invert(8%) sepia(73%) saturate(6656%) hue-rotate(231deg) brightness(113%) contrast(92%)";
    } else {
      heart.src = "./img/empty-heart.svg";
      heart.style.filter = "none";
    }
  });
});

const goToTop_btn = document.getElementById("goToTop_btn");

goToTop_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
