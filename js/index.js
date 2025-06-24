let mySwiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  loop: true,
});

let collection = new Swiper("#collection", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 40,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
});
