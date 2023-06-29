import localctorage from './localctorage';
import axios from 'axios';
import { omit } from 'lodash';

const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/';
const KEY = 'favCards';
const recipeObj = {};
let favRecipesObj = localctorage.load(KEY) || {};

async function getInfo(url, id) {
  const response = await axios.get(`${url}/${id}`);

  return response.data;
}

async function onBtnClick(e) {
  const target = e.target;
  const listItem = target.closest('li.cards__item');
  const id = listItem.dataset.id;

  if (target.closest('button.cards__fav-btn')) {
    if (!favRecipesObj[id]) {
      const data = await getInfo(URL, id);

      listItem.classList.add('onFavorites');

      favRecipesObj[id] = data;
      localctorage.save(KEY, favRecipesObj);

      return;
    }

    if (Object.keys(favRecipesObj).includes(id)) {
      listItem.classList.remove('onFavorites');
      // Видалення об'єкту з улюбленних за допомогою omit
      favRecipesObj = omit(favRecipesObj, id);
      localctorage.save(KEY, favRecipesObj);

      return;
    }
  }
}

const recipeList = document.querySelector('.cards__list');

recipeList.addEventListener('click', onBtnClick);
