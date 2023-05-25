import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay
} from 'swiper';


Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

const heroSlider = document.querySelector('.hero__slider')
const productSlider = document.querySelector('.product__slider')
const saleSlider = document.querySelector('.sale__slider')
const parthersSlider = document.querySelector('.parthers__slider')
const reviewsSlider = document.querySelector('.reviews__slider')

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

if (productSlider) {
  const productSliderSwiper = new Swiper(productSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.product__next',
      prevEl: '.product__prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });
}

if (saleSlider) {
  const productSliderSwiper = new Swiper(saleSlider, {
    slidesPerView: 1,
    navigation: {
      nextEl: '.sale__next',
      prevEl: '.sale__prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        autoplay: false,
      },
    }
  });
}


if (parthersSlider) {
  const partherSliderSwiper = new Swiper(parthersSlider, {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.parthers__next',
      prevEl: '.parthers__prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    }
  });
}

if (reviewsSlider) {
  const reviewsSliderSwiper = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
    pagination: {
      el: '.reviews__pag',
      type: 'bullets',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
}
