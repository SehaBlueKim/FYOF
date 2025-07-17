// 향수 좋아요 버튼
const heartBtn = document.querySelector(".heartBtn");

heartBtn.addEventListener("click", function () {
  if (heartBtn.src.includes("empty_bold_heart.svg")) {
    heartBtn.src = "/img/detail/filled_bold_heart.svg";
    heartBtn.style.filter =
      "invert(8%) sepia(73%) saturate(6656%) hue-rotate(231deg) brightness(113%) contrast(92%)";
  } else {
    heartBtn.src = "/img/detail/empty_bold_heart.svg";
    heartBtn.style.filter = "none";
  }
});

// 중고 좋아요 버튼
const heartButtons = document.querySelectorAll(".secondHand_card_top_hearts");

heartButtons.forEach((btn) => {
  const heartImg = btn.querySelector(".secondHand_card_top_heart");

  btn.addEventListener("click", function () {
    if (heartImg.src.includes("empty-heart.svg")) {
      heartImg.src = "/img/filled-heart.svg";
      heartImg.style.filter =
        "invert(8%) sepia(73%) saturate(6656%) hue-rotate(231deg) brightness(113%) contrast(92%)";
    } else {
      heartImg.src = "/img/empty-heart.svg";
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
      cartImg.src = "/img/discover/check.svg";
      cartImg.style.filter =
        "brightness(0) saturate(100%) invert(4%) sepia(10%) saturate(142%) hue-rotate(314deg) brightness(113%) contrast(90%)";
      cartText.style.color = "var(--mono-color4)";
      btn.style.backgroundColor = "var(--mono-color2)";
    } else {
      cartImg.src = "/img/shopping_cart.svg";
      cartImg.style.filter = "";
      btn.style.backgroundColor = "";
      cartText.style.color = "var(--mono-color2)";
    }
  });
});

// 추천 향수 좋아요 버튼
const hearts = document.querySelectorAll(".heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    if (heart.src.includes("empty-heart.svg")) {
      heart.src = "/img/filled-heart.svg";
      heart.style.filter =
        "invert(8%) sepia(73%) saturate(6656%) hue-rotate(231deg) brightness(113%) contrast(92%)";
    } else {
      heart.src = "/img/empty-heart.svg";
      heart.style.filter = "none";
    }
  });
});

// 팔로우 버튼
const followBtns = document.querySelectorAll(".followBtn");

followBtns.forEach((btn) => {
  const icon = btn.querySelector(".followIcon");
  const text = btn.querySelector(".followText");

  let isFollow = false;

  btn.addEventListener("click", function () {
    isFollow = !isFollow;

    if (isFollow) {
      btn.style.backgroundColor = "var(--mono-color2)";
      btn.style.fontSize = "14px";
      icon.src = "/img/detail/user_check.svg";
      icon.style.filter =
        "brightness(0) saturate(100%) invert(4%) sepia(13%) saturate(22%) hue-rotate(328deg) brightness(96%) contrast(88%)";
      text.style.color = "var(--mono-color4)";
      text.textContent = "팔로잉";
    } else {
      btn.style.backgroundColor = "";
      icon.src = "/img/detail/user_plus.svg";
      icon.style.filter =
        "brightness(0) saturate(100%) invert(91%) sepia(99%) saturate(10%) hue-rotate(249deg) brightness(104%) contrast(96%)";
      text.style.color = "var(--mono-color1)";
      text.textContent = "팔로우";
    }
  });
});

// 상단으로
const goToTop_btn = document.getElementById("goToTop_btn");

goToTop_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
