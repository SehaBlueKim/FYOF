// 필터 토글
let chevrons = document.querySelectorAll(".discover_left_option_chevron");
let options = document.querySelectorAll(".discover_left_option");
let chevron_imgs = document.querySelectorAll(".discover_left_option_chevron");

chevrons.forEach(function (chevron, index) {
  chevron.addEventListener("click", function () {
    const option = options[index];
    const chevron_img = chevron_imgs[index];

    option.classList.toggle("open");

    if (option.classList.contains("open")) {
      chevron_img.style.transform = "rotate(180deg)";
    } else {
      chevron_img.style.transform = "rotate(0deg)";
    }
  });
});

// 좋아요
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

// 초기화
document.getElementById("resetBtn").addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".custom_checkbox");
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
});

// 가격 체크시 input 활성화
const checkbox = document.getElementById("option4-9");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");

checkbox.addEventListener("change", function () {
  const enabled = this.checked;
  priceMin.disabled = !enabled;
  priceMax.disabled = !enabled;

  if (!enabled) {
    priceMin.value = "";
    priceMax.value = "";
  }
});

// 용량 체크시 input 활성화
const checkbox2 = document.getElementById("option5-11");
const capacityMin = document.getElementById("capacityMin");
const capacityMax = document.getElementById("capacityMax");

checkbox2.addEventListener("change", function () {
  const enabled = this.checked;
  capacityMin.disabled = !enabled;
  capacityMax.disabled = !enabled;

  if (!enabled) {
    capacityMin.value = "";
    capacityMax.value = "";
  }
});
