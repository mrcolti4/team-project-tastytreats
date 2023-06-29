import axios from 'axios';
import { markUpRating } from './ratings';
import { finallInitPage } from './pop-up';

const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
const recipeList = document.querySelector('.cards__list');
const windowWidth = document.documentElement.clientWidth;
let limitCount = 0;
if (windowWidth < 768) {
  limitCount = 6;
} else if (windowWidth > 768 && windowWidth < 1280) {
  limitCount = 8;
} else if (windowWidth > 1280) {
  limitCount = 9;
}

export async function getRecipesData(url = URL, params) {
  const { perPage, totalPages } = await getAllRecipes(url, params);

  return { perPage, totalPages };
}

function clearRecipeList() {
  recipeList.innerHTML = '';
}

function generateMarkup({ _id, title, description, preview, rating }) {
  return `
    <li class="cards__item items-set" data-id="${_id}">
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

  return response.data;
}

async function createRecipeList(url, params = {}) {
  const { results } = await getAllRecipes(url, params);

  return results.reduce(
    (markup, currentRecipe) => markup + generateMarkup(currentRecipe),
    ''
  );
}

async function showRecipes(url, params = {}) {
  const recipes = await createRecipeList(url, params);
  clearRecipeList();
  recipeList.insertAdjacentHTML('beforeend', recipes);
  markUpRating();
}

showRecipes(URL, { limit: limitCount });

export { showRecipes };

recipeList.addEventListener('click', e => {
  const refLI = e.target.closest('.cards__item');
  try {
    let is = refLI.nodeName;
  } catch (error) {
    return;
  }
  finallInitPage(refLI.dataset.id);
});
