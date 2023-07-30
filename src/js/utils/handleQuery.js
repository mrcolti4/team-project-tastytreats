import { showRecipes } from '../index/all-recipes';
import { showPagination } from '../index/pagination';

export default function handleQuery(url, params = {}) {
  showRecipes(url, { ...params });
  showPagination(url, { ...params });
}
