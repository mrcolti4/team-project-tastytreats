let $ = require('jquery');

// Налаштування слайдеру
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  });
});

// Пошук елемента DOM
const refs = {
  slider: document.querySelector('.slieder'),
};

let arrEvents = null;
// Отримуемо інформацію з серверу

async function fetchEvents() {
  let response = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/events'
  );
  let arrEvents = await response.json();

  return arrEvents;
}

// Робимо розмітку

function renderSlider(arrEvents) {
  console.log(arrEvents);

  const markup = arrEvents
    .map(event => {
      return `

      
   
       
        `;
    })
    .join('');

  refs.slider.insertAdjacentHTML('beforeend', markup);
}

// Виконую запит, та роблю розмітку.

async function fetchAndRender() {
  const data = await fetchEvents();
  renderSlider(data);
}

// fetchAndRender()
