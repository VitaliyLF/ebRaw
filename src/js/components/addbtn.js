const shopButtons = document.querySelectorAll('.btn--shop');
const favoritesButtons = document.querySelectorAll('.btn--favorites');
const valueSpans = document.querySelectorAll('.user-nav__value');

const updateCounter = (counterElement) => {
  let counter = 0;
  return () => {
    counterElement.textContent = ++counter;
    counterElement.style.display = 'block';

    const button = counterElement.previousElementSibling;

    if (button && button.classList.contains('btn--shop')) {
      button.textContent = 'Added';
      button.classList.add('added');
    }
  };
};

const addClickHandler = (buttons, counterElement) => {
  const update = updateCounter(counterElement);
  buttons.forEach((button) => {
    button.addEventListener('click', update);
    button.addEventListener('click', () => {
      if (button.classList.contains('btn--shop')) {
        button.textContent = 'Added';
        button.classList.add('added');

      } else if (button.classList.contains('btn--favorites')) {
        button.classList.add('added-favorites');
      }
    });
  });
};

addClickHandler(shopButtons, valueSpans[0]);
addClickHandler(favoritesButtons, valueSpans[1]);
