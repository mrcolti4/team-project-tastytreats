import { getAllRecipes } from '../API_requests/getAllRecipes';
import { markUpRating } from '../utils/markUpRating';
import { finallInitPage } from '../pop-up';
import { MessageApi } from '../service/message-api';
import generateMarkup from '../utils/generateMarkup';
import { limitCount } from '../constants';

const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
const recipeList = document.querySelector('.cards__list');

function clearRecipeList() {
  recipeList.innerHTML = '';
}

async function createRecipeList(url, params = {}) {
  try {
    const {
      data: { results },
    } = await getAllRecipes(url, params);
    return results.reduce(
      (markup, currentRecipe) => markup + generateMarkup(currentRecipe),
      ''
    );
  } catch (error) {
    MessageApi.onNetworkError();
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
