// 좋아요
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

// 상단으로
const goToTop_btn = document.getElementById("goToTop_btn");

goToTop_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
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
