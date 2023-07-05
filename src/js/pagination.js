import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { showRecipes, getRecipesData } from './all-recipes';

const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
const container = document.getElementById('tui-pagination-container');
const windowWidth = document.documentElement.clientWidth;
let limitCount = 0;
if (windowWidth < 768) {
  limitCount = 6;
} else if (windowWidth > 768 && windowWidth < 1280) {
  limitCount = 8;
} else if (windowWidth > 1280) {
  limitCount = 9;
}

async function createPagination(url, params) {
  const { perPage, totalPages } = await getRecipesData(url, params);

  const options = {
    totalItems: perPage * totalPages,
    itemsPerPage: perPage,
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

  const paginationP = new Pagination(container, options);

  paginationP.getCurrentPage();
  paginationP.on('afterMove', event => {
    const currentPage = event.page;
    showRecipes(url, { ...params, page: currentPage, limit: limitCount });
  });
}

export function showPagination(url, params = {}) {
  container.innerHTML = '';
  createPagination(url, { ...params, limit: limitCount });
}
showPagination(URL);
