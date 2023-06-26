// console.log('helow world');
const input = document.querySelector('.js-input');
const clinInput = document.querySelector('.js-clin-input');
const serchIcon = document.querySelector('.js-icon-serch');
// console.log(input.value);
input.addEventListener('input', workInputStyle);
function workInputStyle() {
  console.log(input.value.trim().length);
  if (!input.value.trim().length === 0) {
    clinInput.classList.add('active');
    clinInput.serchIcon.replace('svg-serch-clous', 'svg-serch-clous-active');
  }
}
input.addEventListener('input', workInputStyle);
