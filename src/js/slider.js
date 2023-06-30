let $ = require('jquery');

// Налаштування слайдеру

function sliderStart() {
  $(document).ready(function () {
    $('.slider').slick({
      variableWidth: true,
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  });
}

// Пошук елемента DOM
const refs = {
  slider: document.querySelector('.slider'),
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
  const markup = arrEvents
    .map(event => {
      return `

      
      <div class="slider-item-cook" >
      <img src="${event.cook.imgUrl}" loading="lazy" alt="${event.cook.name}">
      </div>
      
      <div class="slider-item-topic bcg">
        <img src="${event.topic.imgUrl}" loading="lazy" alt="${event.topic.name}">
        <p class="description">${event.topic.name}</p>
        <p class="country">${event.topic.area}</p>
      </div>
      
      <div class="slider-item-finally">
        <img src="${event.topic.imgUrl}" loading="lazy" alt="${event.topic.name}">
      </div>
      
   
    
       
        `;
    })
    .join('');

  refs.slider.insertAdjacentHTML('beforeend', markup);
}

// Виконую запит, та роблю розмітку.

async function start() {
  const data = await fetchEvents();
  sliderStart();
  renderSlider(data);
}
start();
