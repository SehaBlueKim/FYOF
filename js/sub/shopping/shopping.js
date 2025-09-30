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

// 배너
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 좋아요 버튼
const hearts = document.querySelectorAll(".heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    if (heart.src.includes("empty-heart.svg")) {
      heart.src = "../../img/filled-heart.svg";
      heart.style.filter =
        "invert(8%) sepia(73%) saturate(6656%) hue-rotate(231deg) brightness(113%) contrast(92%)";
    } else {
      heart.src = "../../img/empty-heart.svg";
      heart.style.filter = "none";
    }
  });
});

// 중고 좋아요 버튼
const heartButtons = document.querySelectorAll(".secondHand_card_top_hearts");

heartButtons.forEach((btn) => {
  const heartImg = btn.querySelector(".secondHand_card_top_heart");

  btn.addEventListener("click", function () {
    if (heartImg.src.includes("empty-heart.svg")) {
      heartImg.src = "../../img/filled-heart.svg";
      heartImg.style.filter =
        "invert(8%) sepia(73%) saturate(6656%) hue-rotate(231deg) brightness(113%) contrast(92%)";
    } else {
      heartImg.src = "../../img/empty-heart.svg";
      heartImg.style.filter = "none";
    }
  });
});

// 중고 장바구니 버튼
const cartBtn = document.querySelectorAll(".secondHand_shopping_cart");

cartBtn.forEach((btn) => {
  const cartImg = btn.querySelector("img");
  const cartText = btn.querySelector("span");

  btn.addEventListener("click", function () {
    if (cartImg.src.includes("shopping_cart.svg")) {
      cartImg.src = "../../img/discover/check.svg";
      cartImg.style.filter =
        "brightness(0) saturate(100%) invert(4%) sepia(10%) saturate(142%) hue-rotate(314deg) brightness(113%) contrast(90%)";
      cartText.style.color = "var(--mono-color4)";
      btn.style.backgroundColor = "var(--mono-color2)";
    } else {
      cartImg.src = "../../img/shopping_cart.svg";
      cartImg.style.filter = "";
      btn.style.backgroundColor = "";
      cartText.style.color = "var(--mono-color2)";
    }
  });
});

// 상단으로 버튼
const goToTop_btn = document.getElementById("goToTop_btn");

goToTop_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
