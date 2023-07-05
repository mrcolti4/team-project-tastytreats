import localctorage from '../localctorage';
import { KEY } from '../addToFavorites';

const noRecipeBox = document.querySelector('.no-recipe-box');
const heroFavorite = document.querySelector('.js-hero-favorite');
const favRecipesObj = localctorage.load(KEY) || {};

if (!Object.values(favRecipesObj).length) {
  noRecipeBox.classList.remove('visually-hidden');
  if (window.innerWidth < 768) {
    heroFavorite.classList.add('visually-hidden');
  }
}
