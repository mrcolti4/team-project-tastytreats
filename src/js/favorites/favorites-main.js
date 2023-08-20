import 'tui-pagination/dist/tui-pagination.css';
import localctorage from '../utils/localctorage';
import { finallInitPage } from '../pop-up';
import {
  favPagination,
  filterPaginationPage,
  showNextPage,
  splitArrOnPages,
} from './pagination';
import { favoriteRefs } from '../refs';
import { getLocalFavRecipes } from '../utils/getLocalFavoriteRecipes';
import { KEY } from '../constants';
import { showNoRecipeBox } from './norecipe';
import { drawAllComponents } from './drawAllComponents';

document.body.classList.add('favorite');

const favCards = localctorage.load(KEY) || {};

let favRecipesItems = getLocalFavRecipes(KEY);

const pagInfo = {
  itemsPerPage: window.innerWidth > 768 ? 12 : 9,
};

function sortByCategory(e) {
  const target = e.target;

  if (target.nodeName === 'BUTTON') {
    const currentActiveBtn = document.querySelector('.btn-active');

    // Робимо активну тільки обрану кнопку.
    currentActiveBtn.classList.remove('btn-active');
    target.classList.add('btn-active');
    // Після натискання на кнопку оновлюємо масив з улюбленими стравами
    favRecipesItems = Object.values(favCards);

    // Якщо натискаємо на якийсь фільтр
    if (target.matches('button.js-category')) {
      // Створюємо масив значення якого є відфільтрований масив
      // з усіма улюбленими стравами
      const newArr = favRecipesItems.filter(({ category }) => {
        return target.textContent === category;
      });
      // Перезаписуємо масив для пагінації
      favRecipesItems = newArr;
      filterPaginationPage(newArr);

      return;
    }

    // Якщо натискаємо на allcategories
    if (target.matches('button.js-allcategories')) {
      filterPaginationPage(favRecipesItems);

      return;
    }
  }
}

if (favRecipesItems.length) {
  drawAllComponents(splitArrOnPages(favRecipesItems, 1, pagInfo.itemsPerPage));
} else {
  showNoRecipeBox();
}

favoriteRefs.cardsList.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    finallInitPage(e.target.closest('.cards__item').dataset.id);
  }
});
favoriteRefs.filterList.addEventListener('click', sortByCategory);

favPagination.isActive(pagInfo.itemsPerPage);
favPagination.on('afterMove', event => {
  const currentPage = event.page;
  showNextPage(favRecipesItems, currentPage);
});
