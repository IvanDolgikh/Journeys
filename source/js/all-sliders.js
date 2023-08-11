import Swiper from '../js/vendor/swiper';

export const swiper = new Swiper('.swiper-1', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

export const swiperTours = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.tours__next-button',
    prevEl: '.tours__back-button',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


export const swiperInstructors = new Swiper('.swiper-3', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: '.training__next-button',
    prevEl: '.training__back-button',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

export const swiperFeedback = new Swiper('.swiper-4', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 30,

  navigation: {
    nextEl: '.feedback__next-button',
    prevEl: '.feedback__back-button',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
    },
  },
});

export const swiperGallery = new Swiper('.swiper-6', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 5,

  navigation: {
    nextEl: '.gallery__next-button',
    prevEl: '.gallery__back-button',
  },
});

let swiperAdvantages;
const breakpoint = window.matchMedia('(max-width:1200px)');

const enableSwiperAdvantages = function () {
  swiperAdvantages = new Swiper('.swiper-5', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2,

    navigation: {
      nextEl: '.advantages__next-button',
      prevEl: '.advantages__back-button',
    },
  });
};

const breakpointChecker = function () {

  if (breakpoint.matches === true) {
    if (swiperAdvantages !== undefined) {
      swiperAdvantages.destroy(true, true);
    }
    return;

  } else if (breakpoint.matches === false) {
    enableSwiperAdvantages();
  }
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();

export {breakpoint, breakpointChecker};
