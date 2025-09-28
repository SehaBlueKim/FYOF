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
