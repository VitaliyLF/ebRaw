import Swiper, {
  Navigation,
  Pagination,
  EffectFade
} from 'swiper';


Swiper.use([Navigation, Pagination, EffectFade]);

const heroSlider = document.querySelector('.hero__slider')

if (heroSlider) {
  const heroSliderSwiper = new Swiper(heroSlider, {
    slidesPerView: 1,
    spaceBetween: 150,
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    pagination: {
      el: '.hero__pag',
      type: 'bullets',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
}
