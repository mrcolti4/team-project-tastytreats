import { KEY } from '../constants';
import { favoriteRefs } from '../refs';
import { getLocalFavRecipes } from '../utils/getLocalFavoriteRecipes';

function createBtnMarkUp(category) {
  return `<button type="button" class="js-category btn-outline-grey btn-fav btn">${category}</button>`;
}

function createBtnFilters() {
  const uniqueCategories = [
    ...new Set(getLocalFavRecipes(KEY).map(item => item.category)),
  ];

  return (
    (uniqueCategories.length > 0
      ? `<button type="button" class="js-allcategories all-categories-btn btn btn-active">
    All categories
  </button>`
      : '') +
    uniqueCategories.reduce((markup, btn) => markup + createBtnMarkUp(btn), '')
  );
}

export function showFilterBtns() {
  favoriteRefs.filterList.innerHTML = '';
  const buttons = createBtnFilters();
  favoriteRefs.filterList.insertAdjacentHTML('beforeend', buttons);
}
