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
