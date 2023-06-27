let $ = require( "jquery" );

// Налаштування слайдеру
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 6000,

    })
})
// Пошук елемента DOM
const refs = {
    slider: document.querySelector('.slider'),
   }

let arrEvents = null;
// Отримуемо інформацію з серверу

async function fetchEvents() {
    let response = await fetch('https://tasty-treats-backend.p.goit.global/api/events');
    let arrEvents = await response.json();
   
    return arrEvents;
}
fetchEvents()
// Робимо розмітку 

function renderSlider(arrEvents) {
    console.log(arrEvents)
   
    const markup = arrEvents.map((event) => {
        return `
<div class="slider-cook" data-id="${event._id}>
        <div class="slider-cook" >
        <img src="${event.cook.imgUrl}" alt="${event.cook.name}">
      </div>
  
  
      <div class="slider-item">
  <img src="${event.topic.imgUrl}" alt="${event.topic.name}">
  <p class="description">${event.topic.name}</p>
  <p class="country">${event.topic.area}</p>
      </div>
  
      <div class="slider-finally-img">
        <img src="${event.topic.imgUrl}" alt="${event.topic.name}">
      </div>
      </div>
       
        `;
    }).join('');

    refs.slider.insertAdjacentHTML('beforeend', markup);
  
  
}





// }

async function fetchAndRender() {
    const data = await fetchEvents();
    renderSlider(data);
}
fetchAndRender()