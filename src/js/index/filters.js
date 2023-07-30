import axios from 'axios';
import handleQuery from '../utils/handleQuery';
import { debounce } from 'lodash';
import { getRecipesData } from './all-recipes';
import { MessageApi } from '../service/message-api';
import { limitCount } from '../constants';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const filterRefs = {
  searchInput: document.querySelector('.input-form'),
  timeSelect: document.querySelector('.time-select'),
  areaSelect: document.querySelector('.area-select'),
  ingredientSelect: document.querySelector('.ingredients-select'),
};

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
    handleQuery(`${BASE_URL}/recipes`, {
      limit: limitCount,
      title: input.value,
    });
    return;
  }
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
