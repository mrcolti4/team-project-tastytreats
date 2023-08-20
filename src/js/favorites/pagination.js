import Pagination from 'tui-pagination';
import localctorage from '../utils/localctorage';
import { KEY } from '../constants';
import { showFavRecipes } from './showFavRecipes';

const loadCards = localctorage.load(KEY) || {};
const cardsArray = Object.values(loadCards);
const pagContainer = document.querySelector('.favorite__pagintaion');

const options = {
  totalItems: cardsArray.length,
  itemsPerPage: 12,
  visiblePages: window.innerWidth < 768 ? 2 : 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="pag__page-btn tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="pag__current-page tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="pag__btn-move tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="pag__btn-move pag__btn-disabled tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const favPagination = new Pagination(pagContainer, options);

// Якщо в нас меньше ніж 12 рецептів, то сховуємо пагінацію
favPagination.isActive = function (itemsCount) {
  const pagContainer = this._view._containerElement;
  const totalItems = this._options.totalItems;
  if (totalItems <= itemsCount) {
    pagContainer.classList.add('hidden');
  } else {
    pagContainer.classList.remove('hidden');
  }
};

export function filterPaginationPage(arr) {
  showFavRecipes(splitArrOnPages(arr, 1, pagInfo.itemsPerPage));
  favPagination.reset(arr.length);
  favPagination.isActive(pagInfo.itemsPerPage);
}

export function showNextPage(recipes, page) {
  const data = splitArrOnPages(recipes, page, pagInfo.itemsPerPage);
  showFavRecipes(data);
}

export function splitArrOnPages(arr, page, itemsCount) {
  const start = (page - 1) * itemsCount; // page = 1 => 0
  const end = start + itemsCount; // 12

  const trimmedData = arr.slice(start, end);
  return trimmedData;
}

export { favPagination };
