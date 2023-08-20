import { showFilterBtns } from './filterButtons';
import { showNoRecipeBox } from './norecipe';
import { showFavRecipes } from './showFavRecipes';

export const drawAllComponents = data => {
  showFavRecipes(data);
  if (data.length === 0) {
    showNoRecipeBox();
  }
  showFilterBtns();
};
