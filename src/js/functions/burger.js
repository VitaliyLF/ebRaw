import {
  disableScroll
} from '../functions/disable-scroll';
import {
  enableScroll
} from '../functions/enable-scroll';

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');

    const menuElements = document?.querySelectorAll('[data-menu]');
    menuElements?.forEach(element => {
      element.classList.toggle('menu--active');
    });

    if (burger?.classList.contains('burger--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Close menu');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('burger--active');

    const menuElements = document?.querySelectorAll('[data-menu]');
    menuElements?.forEach(element => {
      element.classList.remove('menu--active');
    });

    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      burger.classList.remove('burger--active');

      const menuElements = document?.querySelectorAll('[data-menu]');
      menuElements?.forEach(element => {
        element.classList.remove('menu--active');
      });

      enableScroll();
    });
  });
})();
