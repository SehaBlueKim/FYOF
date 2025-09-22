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
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 1,
    },
  },
});

// 컬렉션 스와이퍼
var collectionSwiper = new Swiper(".collectionSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// 좋아요 버튼
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

// 맨 위로 버튼
const goToTop_btn = document.getElementById("goToTop_btn");

goToTop_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 모바일 gnb
if (window.matchMedia("(min-width: 320px) and (max-width: 768px)").matches) {
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".icons button:last-child");
    const gnb = document.getElementById("gnb");

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      gnb.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (!gnb.contains(e.target) && !menuBtn.contains(e.target)) {
        gnb.classList.remove("active");
      }
    });
  });
}
