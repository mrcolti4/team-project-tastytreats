import Pagination from 'tui-pagination';
import localctorage from '../localctorage';
import { KEY } from '../addToFavorites';

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

export { favPagination };
