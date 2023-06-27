import './js/localctorage';
import './js/header-script';
import './js/header-mobile-menu';
import axios from 'axios';

const categoriesList = document.querySelector('.category-button-list');
const favoriteCards = document.querySelector('.cards__list.card-set');
const noRecipeBox = document.querySelector('.no-recipe-box');

const LOCAL_STORAGE_KEY = 'recipe';

// const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
const localStorageData =
  '["6462a8f74c3d0ddd28897fc1", "6462a8f74c3d0ddd28897fbc", "6462a8f74c3d0ddd28897fb9", "6462a8f74c3d0ddd28897fdf", "6462a8f74c3d0ddd28897fc2", "6462a8f74c3d0ddd28897fbf"]';
// const getFromlocalStorage = LOCAL_STORAGE_KEY => {
//   try {
//     const parsedLocalStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     return parsedLocalStorageData === null
//       ? undefined
//       : JSON.parse(parsedLocalStorageData);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
const parsedLocalStorageData = JSON.parse(localStorageData);
console.log(getRecipeById('6462a8f74c3d0ddd28897fc1'));
const categoriesListMarkup = parsedLocalStorageData.map(element => {
  getRecipeById(element)
    .then(({ data }) => {
      categoriesList.insertAdjacentHTML(
        'afterbegin',
        `<li class="category-button-item">
          <button type="button" class="category-button-button btn">
            ${data.category}
          </button>
        </li>`
      );
    })
    .catch(error => console.log('error'));
  //   console.log(categoriesDataBut);
});

const FavoritesCardMarkup = parsedLocalStorageData.map(element => {
  getRecipeById(element)
    .then(({ data }) => {
      favoriteCards.insertAdjacentHTML(
        'afterbegin',
        `<li class="cards__item items-set fav-set">
        <img src="${data.preview}" alt="" class="cards__img" />
        <svg class="cards__heart" width="19" height="17">
          <use href="./images/sprite.svg#icon-heart"></use>
        </svg>
        <div class="cards__descr">
          <h4 class="cards__title">${data.title}</h4>
          <p class="cards__text">
            ${data.description}
          </p>
          <div class="cards__info">
            <div class="cards__rating rating">
              <div class="rating__value">5</div>
              <div class="rating__body">
                <div class="rating__active"></div>
                <div class="rating__items">
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="1"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="2"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="3"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="4"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="5"
                  />
                </div>
              </div>
            </div>
            <button class="btn btn-primary cards__btn">See recipe</button>
          </div>
        </div>
      </li>`
      );
    })
    .catch(error => console.log('error'));
});

noRecipeBox.classList.add('visually-hidden');

function getRecipeById(_id) {
  const response = axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${_id}`
  );
  return response;
}
