document.addEventListener("DOMContentLoaded", function () {
  if (!window.swiper6) {
    window.swiper6 = new Swiper(".mySwiper4", {
      slidesPerView: 4,
      spaceBetween: 60, // 기본 간격 넉넉히
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 80,
        },
      },
    });
  }
});
