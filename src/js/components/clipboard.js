import ClipboardJS from 'clipboard';

const CopyButton = document.querySelector('.sale-timer__btn');

const clipboard = new ClipboardJS(CopyButton);


CopyButton.addEventListener('click', function () {
  CopyButton.classList.add('clicked')

  setTimeout(function () {
    CopyButton.classList.remove('clicked');
  }, 1000);
})
