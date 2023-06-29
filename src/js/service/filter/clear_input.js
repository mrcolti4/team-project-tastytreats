import { onEmptyInput } from '../../filters';

const windowWidth = document.documentElement.clientWidth;
let limitCount = 0;
if (windowWidth < 768) {
  limitCount = 6;
} else if (windowWidth > 768 && windowWidth < 1280) {
  limitCount = 8;
} else if (windowWidth > 1280) {
  limitCount = 9;
}

const input = document.querySelector('.js-input');
const clearInput = document.querySelector('.js-clear-input');
const serchIcon = document.querySelector('.js-icon-serch');

input.addEventListener('focus', () => {
  serchIcon.classList.add('active');
});
input.addEventListener('blur', () => {
  serchIcon.classList.remove('active');
});

input.addEventListener('input', turnOnOffCross);
clearInput.addEventListener('click', clickCross);

function turnOnOffCross() {
  if (input.value.trim().length > 0) {
    clearInput.classList.add('active');
    return;
  }
  clearInput.classList.remove('active');
}

function clickCross() {
  input.value = '';
  clearInput.classList.remove('active');
  onEmptyInput();
}
