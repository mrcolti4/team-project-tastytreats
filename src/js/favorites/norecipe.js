import { noRecipeRefs } from '../refs';
import { KEY } from '../constants';
import { getLocalFavRecipes } from '../utils/getLocalFavoriteRecipes';

export function showNoRecipeBox() {
  if (!getLocalFavRecipes(KEY).length) {
    noRecipeRefs.noRecipeBox.classList.remove('visually-hidden');
    if (window.innerWidth < 768) {
      noRecipeRefs.heroFavorite.classList.add('visually-hidden');
    }
  }
}
