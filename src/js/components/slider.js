import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay
} from 'swiper';


Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

const heroSlider = document.querySelector('.hero__slider')
const ProductSlider = document.querySelector('.product__slider')

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
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

if (ProductSlider) {
  const ProductSliderSwiper = new Swiper(ProductSlider, {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product__next',
      prevEl: '.product__prev',
    },
  });
}
