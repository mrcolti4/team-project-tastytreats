import axios from 'axios';
import { fetchCategories } from './service/API.js';

const markup = createAllCategireisListItem();

const allCategoriesBtn = document.querySelector('.all-categories-btn');
const allCatConteiner = document.querySelector(
  '.all-categiries-list-container'
);

allCatConteiner.addEventListener('click', changeActiveClassMenuButtons);
allCategoriesBtn.addEventListener(
  'click',
  changeActiveClassAllCategoriesButton
);

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

function changeActiveClassMenuButtons(e) {
  for (let i = 0; i < e.currentTarget.children.length; i += 1) {
    e.currentTarget.children[i].classList.remove('active');
  }
  allCategoriesBtn.classList.remove('active');
  e.target.classList.add('active');
}

function changeActiveClassAllCategoriesButton(e) {
  e.currentTarget.classList.add('active');
  for (
    let i = 0;
    i < e.currentTarget.nextElementSibling.children.length;
    i += 1
  ) {
    e.currentTarget.nextElementSibling.children[i].classList.remove('active');
  }
}
