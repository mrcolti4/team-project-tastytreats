import axios from 'axios';
import { fetchCategories } from './service/API.js';
import { handleQuery } from './filters.js';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const allCategoriesBtn = document.querySelector('.all-categories-btn');
const allCatConteiner = document.querySelector(
  '.all-categiries-list-container'
);

allCatConteiner.addEventListener('click', changeActiveClassMenuButtons);
allCategoriesBtn.addEventListener(
  'click',
  changeActiveClassAllCategoriesButton
);

async function handleCategoryClick(e) {
  const target = e.target;
  if (target.matches('button.all-categories-item-btn')) {
    allCategoriesBtn.classList.remove('btn-active');
    await handleQuery(`${BASE_URL}/recipes`, { category: target.innerText });
    return;
  }
}

async function handleAllCategoryClick(e) {
  allCategoriesBtn.classList.add('btn-active');
  await handleQuery(`${BASE_URL}/recipes`);
  return;
}

async function createAllCategireisListItem() {
  const categories = await fetchCategories();

  const AllCategireisListItem = categories
    .map(category => {
      return `
                <button class="all-categories-item-btn"
                  type="button">${category}
                </button>`;
    })
    .join('');

  allCatConteiner.insertAdjacentHTML('afterbegin', AllCategireisListItem);
}

createAllCategireisListItem();
allCategoriesList.addEventListener('click', handleCategoryClick);
allCategoriesBtn.addEventListener('click', handleAllCategoryClick);
