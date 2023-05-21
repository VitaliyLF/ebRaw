import ClipboardJS from 'clipboard';

const copyButton = document.querySelector('.sale-timer__btn');

const clipboard = new ClipboardJS(copyButton);

copyButton.addEventListener('click', () => {
  copyButton.classList.add('clicked');

  setTimeout(() => {
    copyButton.classList.remove('clicked');
  }, 1000);
});
