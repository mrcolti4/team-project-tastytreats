import axios from 'axios';
import { fetchCategories } from './service/API.js';

const allCategoriesBtn = document.querySelector('.all-categories-btn');
const allCategoriesList = document.querySelector('.all-categories-list');

async function createAllCategireisListItem() {
  const categories = await fetchCategories();

  const AllCategireisListItem = categories
    .map(category => {
      return `<li class="all-categories-item"">
                <button class="all-categories-item-btn"
                  type="button">${category}
                </button>
              </li>`;
    })
    .join('');

  allCategoriesList.insertAdjacentHTML('afterbegin', AllCategireisListItem);
}

createAllCategireisListItem();
