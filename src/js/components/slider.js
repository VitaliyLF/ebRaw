import Swiper, {
  Navigation,
  Pagination
} from 'swiper';


Swiper.use([Navigation, Pagination]);


const swiper = new Swiper('.hero__slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  pagination: {
    el: '.hero__pag',
    type: 'bullets',
  },
});
