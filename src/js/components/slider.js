import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade
} from 'swiper';


Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);


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
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
}
