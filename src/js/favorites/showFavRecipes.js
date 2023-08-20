import { markUpRating } from '../utils/markUpRating';
import generateMarkup from '../utils/generateMarkup';
import { favoriteRefs } from '../refs';

export function showFavRecipes(recipeArr) {
  const markUp = recipeArr.reduce(
    (markup, card) => markup + generateMarkup(card),
    ''
  );
  favoriteRefs.cardsList.innerHTML = '';
  favoriteRefs.cardsList.insertAdjacentHTML('beforeend', markUp);
  markUpRating();
}
