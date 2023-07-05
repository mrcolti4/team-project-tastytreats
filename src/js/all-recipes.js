import axios from 'axios';
import { markUpRating } from './ratings';
import { finallInitPage } from './pop-up';
import localctorage from './localctorage';
import { onEmptyResult } from './filters';
import { MessageApi } from './service/message-api';
import generateMarkup from './generateMarkup';

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
  try {
    const { results } = await getAllRecipes(url, params);

    return results.reduce(
      (markup, currentRecipe) => markup + generateMarkup(currentRecipe),
      ''
    );
  } catch (error) {
    MessageApi.onNetworkError();
    onEmptyResult();
  }
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
  if (e.target.nodeName === 'BUTTON') {
    finallInitPage(e.target.closest('.cards__item').dataset.id);
  }
});
