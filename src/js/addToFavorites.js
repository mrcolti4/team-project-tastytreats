import { omit } from 'lodash';

import localctorage from './utils/localctorage';
import { fetchSingleRecipe } from './API_requests/fetchSingleRecipe';
import { KEY } from './constants';
import { addToFavRefs } from './refs';
import { drawAllComponents } from './favorites/drawAllComponents';
import { getLocalFavRecipes } from './utils/getLocalFavoriteRecipes';

let favRecipesObj;
loadLocalStorage(KEY);

function loadLocalStorage(key) {
  favRecipesObj = localctorage.load(key) || {};
}

function removeFromFavorites(localStorageObj, id) {
  favRecipesObj = omit(localStorageObj, id);
  localctorage.save(KEY, favRecipesObj);
  if (document.body.classList.contains('favorite'))
    drawAllComponents(getLocalFavRecipes(KEY));
}

async function addToFavorites(localStorageObj = {}, id) {
  const data = await fetchSingleRecipe(id);

  localStorageObj[id] = data;
  localctorage.save(KEY, localStorageObj);
}

function onBtnClick(e) {
  const target = e.target;
  loadLocalStorage(KEY);
  if (target.closest('button.cards__fav-btn')) {
    const listItem = target.closest('li.cards__item');
    const id = listItem.dataset.id;

    if (!favRecipesObj[id]) {
      listItem.classList.add('onFavorites');
      addToFavorites(favRecipesObj, id);
      return;
    }

    if (Object.keys(favRecipesObj).includes(id)) {
      listItem.classList.remove('onFavorites');
      removeFromFavorites(favRecipesObj, id);
      return;
    }
  }
}

function toggleFavoriteRecipe({ target }) {
  const modalId = target.closest('div.js-modal-recipe').dataset.id;
  const listItem = document.querySelector(
    `li.cards__item[data-id='${modalId}']`
  );

  if (Object.keys(favRecipesObj).includes(modalId)) {
    listItem.classList.remove('onFavorites');
    addToFavRefs.addToFavoriteBtn.classList.remove('hidden');
    addToFavRefs.removeFromFavoriteBtn.classList.add('hidden');

    removeFromFavorites(favRecipesObj, modalId);
  } else {
    listItem.classList.add('onFavorites');
    addToFavRefs.addToFavoriteBtn.classList.add('hidden');
    addToFavRefs.removeFromFavoriteBtn.classList.remove('hidden');

    addToFavorites(favRecipesObj, modalId);
  }
}

// Add event listeners
addToFavRefs.addToFavoriteBtn.addEventListener('click', toggleFavoriteRecipe);
addToFavRefs.removeFromFavoriteBtn.addEventListener(
  'click',
  toggleFavoriteRecipe
);
addToFavRefs.recipeList.addEventListener('click', onBtnClick);
