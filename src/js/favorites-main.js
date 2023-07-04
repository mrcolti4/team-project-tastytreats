import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import localctorage from './localctorage';
import generateMarkup from './generateMarkup';
import { finallInitPage } from './pop-up';
import { markUpRating } from './ratings';

const favCards = localctorage.load('favCards') || {};
const cardsList = document.querySelector('.cards__list');
const filterList = document.querySelector('.category-button-wrap');
const pagContainer = document.querySelector('.favorite__pagintaion');
let favRecipesItems = Object.values(favCards);

const options = {
  totalItems: favRecipesItems.length,
  itemsPerPage: 12,
  visiblePages: 3,
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

favPagination.on('afterMove', event => {
  const currentPage = event.page;
  pagOnCategory(favRecipesItems, currentPage);
});

function pagOnCategory(recipes, page) {
  const data = splitArrOnPages(recipes, page, 12);
  console.log(data);
  showFavRecipes(data);
}

function splitArrOnPages(arr, page, itemsCount) {
  const start = (page - 1) * itemsCount;
  const end = start + itemsCount;

  const trimmedData = arr.slice(start, end);
  return trimmedData;
}

function addAllCategoriesBtn() {
  filterList.insertAdjacentHTML(
    'beforeend',
    `<button type="button" class="fav-btn all-categories-btn btn btn-active">
    All categories
  </button>`
  );
}

function sortByCategory(e) {
  const target = e.target;
  const allCatBtn = e.currentTarget.firstChild;
  favRecipesItems = Object.values(favCards);

  if (target.matches('button.category-button-button')) {
    allCatBtn.classList.remove('btn-active');
    const newArr = favRecipesItems.filter(item => {
      return target.textContent === item.category;
    });
    favRecipesItems = newArr;

    showFavRecipes(splitArrOnPages(newArr, 1, 12));
    favPagination.reset(newArr.length);

    return;
  }

  if (target.matches('button.fav-btn')) {
    target.classList.add('btn-active');

    showFavRecipes(splitArrOnPages(favRecipesItems, 1, 12));
    favPagination.reset(favRecipesItems.length);

    return;
  }
}

function createBtnMarkUp(category) {
  return `<button type="button" class="category-button-button btn">${category}</button>`;
}

function createBtnFilters() {
  const uniqueCategories = favRecipesItems
    .map(item => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return uniqueCategories.reduce(
    (markup, btn) => markup + createBtnMarkUp(btn),
    ''
  );
}

function showFilterBtns() {
  const buttons = createBtnFilters();
  addAllCategoriesBtn();
  filterList.insertAdjacentHTML('beforeend', buttons);
}

function showFavRecipes(recipeArr) {
  const markUp = recipeArr.reduce(
    (markup, card) => markup + generateMarkup(card),
    ''
  );

  cardsList.innerHTML = '';
  cardsList.insertAdjacentHTML('beforeend', markUp);

  markUpRating();
}

if (favRecipesItems.length) {
  showFavRecipes(splitArrOnPages(favRecipesItems, 1, 12));
  showFilterBtns();
}

cardsList.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    finallInitPage(e.target.closest('.cards__item').dataset.id);
  }
});
filterList.addEventListener('click', sortByCategory);
