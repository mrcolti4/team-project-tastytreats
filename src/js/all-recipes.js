import axios from 'axios';
import { markUpRating } from './ratings';

const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
const recipeList = document.querySelector('.cards__list');
const windowWidth = document.documentElement.clientWidth;

function clearRecipeList() {
  recipeList.innerHTML = '';
}

function generateMarkup({ title, description, preview, rating }) {
  return `
    <li class="cards__item items-set">
    <img src="${preview}" alt="${title}" class="cards__img" />
    <svg class="cards__heart" width="19" height="17">
      <use href="./images/sprite.svg#icon-heart"></use>
    </svg>
    <div class="cards__descr">
      <h4 class="cards__title">${title}</h4>
      <p class="cards__text">
        ${description}
      </p>
      <div class="cards__info">
        <div class="cards__rating rating">
          <div class="rating__value">${rating}</div>
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
  </li>
    `;
}

async function getAllRecipes(url, params = {}) {
  const {
    category = '',
    area = '',
    time = '',
    title = '',
    ingredient = '',
    limit = 6,
    page = 1,
  } = params;
  const response = await axios.get(`${url}/?`, {
    params: {
      category,
      area,
      time,
      title,
      ingredient,
      limit,
      page,
    },
  });
  console.log(response.data);
  return response.data;
}

async function createRecipeList(params = {}) {
  const { results, perPage, totalPages } = await getAllRecipes(URL, params);
  return results.reduce(
    (markup, currentRecipe) => markup + generateMarkup(currentRecipe),
    ''
  );
}

async function showRecipes(params = {}) {
  const recipes = await createRecipeList(params);
  clearRecipeList();
  recipeList.insertAdjacentHTML('beforeend', recipes);
  markUpRating();
}

if (windowWidth < 768) {
  showRecipes({ limit: 6 });
} else if (windowWidth > 768 && windowWidth < 1280) {
  showRecipes({ limit: 8 });
} else if (windowWidth > 1280) {
  showRecipes({ limit: 9 });
}
export { showRecipes };
