
const input = document.querySelector('.js-input');
const clinInput = document.querySelector('.js-clin-input');
const serchIcon = document.querySelector('.js-icon-serch');


input.addEventListener('focus', () => {
  serchIcon.classList.add('active');
});
input.addEventListener('blur', () => {
  serchIcon.classList.remove('active');
});

input.addEventListener('input', turnOnOffCross);
clinInput.addEventListener('click', clickCross);

function turnOnOffCross() {

  if (!(input.value.trim().length === 0)) {
    clinInput.classList.add('active');
    return;
  }
  clinInput.classList.remove('active');
}

function clickCross() {
  input.value = '';
  clinInput.classList.remove('active');
}

