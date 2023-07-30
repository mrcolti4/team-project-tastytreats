import localctorage from './utils/localctorage';
import { fetchSingleRecipe } from './API_requests/fetchSingleRecipe';
import { omit } from 'lodash';
import { KEY } from './constants';
import { addToFavRefs } from './refs';

let favRecipesObj;
loadLocalStorage(KEY);

function loadLocalStorage(key) {
  favRecipesObj = localctorage.load(key) || {};
}

function removeFromFavorites(localStorageObj, id) {
  favRecipesObj = omit(localStorageObj, id);
  localctorage.save(KEY, favRecipesObj);
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

function toggleFavoriteRecipe(e) {
  const target = e.target;
  const modal = target.closest('div.js-modal-recipe');
  const modalId = modal.dataset.id;
  const listItem = document.querySelector(
    `li.cards__item[data-id='${modalId}']`
  );

  if (Object.keys(favRecipesObj).includes(modalId)) {
    removeFromFavorites(favRecipesObj, modalId);
    console.log(listItem);
    listItem.classList.remove('onFavorites');
    addToFavRefs.addToFavoriteBtn.classList.remove('hidden');
    addToFavRefs.removeFromFavoriteBtn.classList.add('hidden');
  } else {
    addToFavorites(favRecipesObj, modalId);

    listItem.classList.add('onFavorites');
    addToFavRefs.addToFavoriteBtn.classList.add('hidden');
    addToFavRefs.removeFromFavoriteBtn.classList.remove('hidden');
  }
}

// Add event listeners
addToFavRefs.addToFavoriteBtn.addEventListener('click', toggleFavoriteRecipe);
addToFavRefs.removeFromFavoriteBtn.addEventListener(
  'click',
  toggleFavoriteRecipe
);
addToFavRefs.recipeList.addEventListener('click', onBtnClick);
