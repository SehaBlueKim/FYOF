const targets = document.querySelectorAll(".card_first_wrap");
const cardWraps = document.querySelectorAll(".card_wrap");
const view_more_btn = document.querySelector(".view_more_btn");
const view_more_wrap = document.querySelector(".view_more_wrap");

// 스크롤 시 초기 카드와 버튼 이전 card_wrap 모두 show
window.addEventListener("scroll", function () {
  targets.forEach(function (el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add("show");
    }
  });
  cardWraps.forEach(function (el) {
    // 버튼 클릭 이후 카드들은 view_more_wrap 안에 있으므로 스킵
    if (!view_more_wrap.contains(el)) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("show");
      }
    }
  });
});

// 버튼 클릭 시 view_more_wrap 내부 card_wrap show
view_more_btn.addEventListener("click", function () {
  view_more_wrap.style.display = "block";
  view_more_btn.style.display = "none";

  const targets2 = view_more_wrap.querySelectorAll(".card_wrap");

  setTimeout(() => {
    targets2.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 200);
    });
  }, 50);
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

// go to top 버튼
const goToTop_btn = document.getElementById("goToTop_btn");

goToTop_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
