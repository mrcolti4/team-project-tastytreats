import axios from 'axios';
import { showRecipes } from './all-recipes';
import { debounce } from 'lodash';
import { showPagination } from './pagination';
import { getRecipesData } from './all-recipes';
import { MessageApi } from './service/message-api';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const filterRefs = {
  searchInput: document.querySelector('.input-form'),
  timeSelect: document.querySelector('.time-select'),
  areaSelect: document.querySelector('.area-select'),
  ingredientSelect: document.querySelector('.ingredients-select'),
};
const windowWidth = document.documentElement.clientWidth;

let limitCount = 0;
if (windowWidth < 768) {
  limitCount = 6;
} else if (windowWidth > 768 && windowWidth < 1280) {
  limitCount = 8;
} else if (windowWidth > 1280) {
  limitCount = 9;
}

export async function handleQuery(url, params = {}) {
  await showRecipes(`${BASE_URL}/recipes`, { ...params, limit: limitCount });
  await showPagination(`${BASE_URL}/recipes`, { ...params, limit: limitCount });
}

export function onEmptyResult() {
  MessageApi.showError();
}

async function searchRecipe(e) {
  const input = e.target;
  const { perPage, totalPages } = await getRecipesData(`${BASE_URL}/recipes`, {
    limit: limitCount,
    title: input.value,
  });

  if (!totalPages) {
    onEmptyResult();
  }
  if (totalPages) {
    MessageApi.showTotalFound(totalPages);
  }
  if (input.value.trim() !== '') {
    await showRecipes(`${BASE_URL}/recipes`, {
      limit: limitCount,
      title: input.value,
    });
    await showPagination(`${BASE_URL}/recipes`, {
      limit: limitCount,
      title: input.value,
    });
    return;
  }

  handleQuery();
}

async function getAreas(api) {
  const response = await axios.get(`${BASE_URL}/${api}`);
  return response.data;
}

async function markUpAreas(api) {
  const data = await getAreas(api);
  return data.reduce((markUp, currentName) => {
    return markUp + `<option>${currentName.name}</option>`;
  }, '');
}

async function addAreas(api, input) {
  const data = await markUpAreas(api);

  input.insertAdjacentHTML('beforeend', data);
}

filterRefs.searchInput.addEventListener('input', debounce(searchRecipe, 300));

addAreas('areas', filterRefs.areaSelect);
addAreas('ingredients', filterRefs.ingredientSelect);
