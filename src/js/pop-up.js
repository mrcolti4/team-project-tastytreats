import { Loader } from './loader';
import { markUpRating } from './ratings';
import localctorage from './localctorage';
import { KEY } from './addToFavorites';
import { addToFavorites, removeFromFavorites } from './addToFavorites';
// Всі посилання
let refs = {
  closeBtn: document.querySelector('.modal-close-btn'),
  closeVideo: document.querySelector('.tiezer-close-btn'),
  tiezer: document.querySelector('.tiezer'),
  trailerBox: document.querySelector('.trailer-box'),
  btnOpenYouTube: document.querySelector('.js-btn-openYouTube'),
  preview: document.querySelector('.recipes'),
  video: document.querySelector('iframe'),
  title: document.querySelector('.js-title'),
  time: document.querySelector('.js-minute'),
  modalRecipe: document.querySelector('.js-modal-recipe'),
  backdropRecipe: document.querySelector('.js-backdrop-recipe'),
  ratingBox: document.querySelector('.js-rating-recipe-wraper'),
  IngredientBox: document.querySelector('.recipes-list'),
  hashtagsBox: document.querySelector('.hashtags-list'),
  textContentBox: document.querySelector('.cooking-recipes'),
  addToFavoriteBtn: document.querySelector('.js-addToFavorite-btn'),
  removeFromFavoriteBtn: document.querySelector('.js-removeFromFavorite-btn'),
};

let recipeId;
// Запуск по кліку
// setTimeout(() => {
//   finallInitPage('6462a8f74c3d0ddd28897fc1');
// }, 2000)

// /** Відкриття та закриття модального вікна */
refs.closeBtn.addEventListener('click', closeModalClose);
refs.backdropRecipe.addEventListener('click', clickBackdropClick);
function openModalOpen() {
  // Loader.Start();
  setTimeout(() => {
    window.addEventListener('keydown', onEscPress);
    document.body.classList.add('overflowHidden');
    refs.backdropRecipe.classList.add('active');
    refs.modalRecipe.classList.add('active');
    // Loader.Stop();
  }, 50);
}
function closeModalClose() {
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('overflowHidden');
  refs.backdropRecipe.classList.remove('active');
  refs.modalRecipe.classList.remove('active');
}
function clickBackdropClick(e) {
  if (e.currentTarget === e.target) {
    stopVideos();
    closeModalClose();
  }
}
function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModalClose();
  }
}
// /** Кінець Відкриття та закриття модального вікна */

export function finallInitPage(id) {
  fetchRecipeById(id).then(data => {
    isFavorite(data._id);
    renderVIDEO(data);
    renderRanting(data);
    markUpRating();
    renderIngridient(data);
    renderHashtags(data);
    renderText(data);
    openModalOpen();
    recipeId = data._id;
  });
}

async function fetchRecipeById(id) {
  const resp = await fetch(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${id}`
  );
  const data = await resp.json();
  return data;
}

// YouTUBE module
refs.closeVideo.addEventListener('click', stopVideos);
refs.btnOpenYouTube.addEventListener('click', openPlayer);

function stopVideos() {
  refs.trailerBox.classList.remove('active');

  document.querySelectorAll('iframe').forEach(video => {
    video.src = video.src;
  });
  document.querySelectorAll('video').forEach(video => {
    video.pause();
  });
}
function openPlayer() {
  refs.trailerBox.classList.add('active');
}
// end YouTUBE module

//  Рендер частин сторінки
function getKeyYouTybe(url) {
  let indexLast = url.split('').length;

  let key = url.split('').splice(32, indexLast).join('');
  return key;
}
function renderVIDEO(data) {
  const markUp = `
   <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/${getKeyYouTybe(
                  data.youtube
                )}?origin=https://mrcolti4.github.io"

title = "YouTube video player"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen
  ></iframe >
`;
  refs.tiezer.innerHTML = markUp;
}
function renderRanting(data) {
  let markupR = `
  <div class="cards__rating rating">
          <div class="rating__value detail">${data.rating}</div>
          <div class="rating__body">
            <div class="rating__active"></div>
            <div class="rating__items">
              <input
                type="radio"
                class="rating__item"
                name="rating"
                value="1"
              />
              <input
                type="radio"
                class="rating__item"
                name="rating"
                value="2"
              />
              <input
                type="radio"
                class="rating__item"
                name="rating"
                value="3"
              />
              <input
                type="radio"
                class="rating__item"
                name="rating"
                value="4"
              />
              <input
                type="radio"
                class="rating__item"
                name="rating"
                value="5"
              />
            </div>
          </div>
        </div>`;
  refs.ratingBox.innerHTML = markupR;
}
function renderIngridient(data) {
  const markup = data.ingredients
    .map(({ measure, name }) => {
      return `<li class="recipes-subtitle">
                ${name}
                <p class="recipes-inf" p>${measure}</p>
              </li>`;
    })
    .join('');

  refs.IngredientBox.innerHTML = markup;
}
function renderHashtags(data) {
  if (data.tags.length === 0) {
    return;
  }
  const markup = data.tags
    .map(tag => {
      return ` <li class="hashtags">#${tag}</li>`;
    })
    .join('');

  refs.hashtagsBox.innerHTML = markup;
}
function renderText(data) {
  refs.preview.src = data.preview;
  refs.title.textContent = data.title;
  refs.textContentBox.textContent = data.instructions;
  refs.time.textContent = data.time + ' min';
}

// Реалізцація кнопок додавання та видалення з блоку favorites
refs.addToFavoriteBtn.addEventListener('click', onAddToFavClick);
refs.removeFromFavoriteBtn.addEventListener('click', onRemoveFromFavClick);

function onAddToFavClick(e) {
  const listItem = document.querySelector(`li[data-id='${recipeId}']`);

  addToFavorites(localctorage.load(KEY), recipeId);

  listItem.classList.add('onFavorites');
  refs.addToFavoriteBtn.classList.add('hidden');
  refs.removeFromFavoriteBtn.classList.remove('hidden');
}

function onRemoveFromFavClick(e) {
  const listItem = document.querySelector(
    `li.cards__item[data-id='${recipeId}']`
  );

  removeFromFavorites(localctorage.load(KEY), recipeId);

  listItem.classList.remove('onFavorites');
  refs.addToFavoriteBtn.classList.remove('hidden');
  refs.removeFromFavoriteBtn.classList.add('hidden');
}

function isFavorite(id) {
  const favCards = localctorage.load(KEY) || {};
  if (Object.keys(favCards).includes(id)) {
    refs.removeFromFavoriteBtn.classList.remove('hidden');
    refs.addToFavoriteBtn.classList.add('hidden');
    return;
  }
  refs.removeFromFavoriteBtn.classList.add('hidden');
  refs.addToFavoriteBtn.classList.remove('hidden');
}
