const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

const swiper2 = new Swiper(".swiper-container2", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperContainer = new Swiper(".swiper-container-coaches", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
