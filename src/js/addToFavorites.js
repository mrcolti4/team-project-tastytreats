import localctorage from './localctorage';
import axios from 'axios';
import { omit } from 'lodash';

const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/';
export const KEY = 'favCards';
const recipeObj = {};
let favRecipesObj = localctorage.load(KEY) || {};

// localStorageObj = omit(localStorageObj, id);
// localctorage.save(KEY, localStorageObj);
export function removeFromFavorites(localStorageObj, id) {
  favRecipesObj = omit(localStorageObj, id);
  localctorage.save(KEY, favRecipesObj);
}

export async function addToFavorites(localStorageObj = {}, id) {
  const data = await getInfo(id);

  localStorageObj[id] = data;
  localctorage.save(KEY, localStorageObj);

  return localStorageObj;
}

async function getInfo(id) {
  const response = await axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${id}`
  );

  return response.data;
}

async function onBtnClick(e) {
  const target = e.target;

  if (target.closest('button.cards__fav-btn')) {
    const listItem = target.closest('li.cards__item');
    const id = listItem.dataset.id;

    if (!favRecipesObj[id]) {
      listItem.classList.add('onFavorites');
      // const data = await getInfo(URL, id);
      // favRecipesObj[id] = data;
      // localctorage.save(KEY, favRecipesObj);
      addToFavorites(favRecipesObj, id);
      return;
    }

    if (Object.keys(favRecipesObj).includes(id)) {
      listItem.classList.remove('onFavorites');
      // Видалення об'єкту з улюбленних за допомогою omit
      // favRecipesObj = omit(favRecipesObj, id);
      // localctorage.save(KEY, favRecipesObj);
      removeFromFavorites(favRecipesObj, id);
      return;
    }
  }
}

const recipeList = document.querySelector('.cards__list');

recipeList.addEventListener('click', onBtnClick);
