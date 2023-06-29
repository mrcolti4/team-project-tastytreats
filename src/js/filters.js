import axios from 'axios';
import { showRecipes } from './all-recipes';
import { debounce } from 'lodash';
import { showPagination } from './pagination';

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

export async function onEmptyInput() {
  await showRecipes(`${BASE_URL}/recipes`, { limit: limitCount });
  await showPagination(`${BASE_URL}/recipes`, { limit: limitCount });
}

async function searchRecipe(e) {
  const input = e.target;
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

  onEmptyInput();
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
