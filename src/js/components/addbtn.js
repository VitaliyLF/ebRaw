const shopButtons = document.querySelectorAll('.add-btn--shop');
const favoritesButtons = document.querySelectorAll('.add-btn--favorites');
const valueSpans = document.querySelectorAll('.user-nav__value');

const updateCounter = (counterElement) => {
  let counter = 0;
  return () => {
    counterElement.textContent = ++counter;
    counterElement.style.display = 'block';
  };
};

const addClickHandler = (buttons, counterElement) => {
  const update = updateCounter(counterElement);
  buttons.forEach((button) => button.addEventListener('click', update));
};

addClickHandler(shopButtons, valueSpans[0]);
addClickHandler(favoritesButtons, valueSpans[1]);
