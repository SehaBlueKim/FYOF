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
