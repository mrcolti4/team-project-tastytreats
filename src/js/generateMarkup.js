import localctorage from './localctorage';

export default function generateMarkup({
  _id,
  title,
  description,
  preview,
  rating,
}) {
  const favObj = localctorage.load('favCards') || {};

  return `
    <li class="cards__item items-set ${
      favObj[_id] ? 'onFavorites' : ''
    }" data-id="${_id}">
    <img src="${preview}" alt="${title}" class="cards__img" />
    <button class="cards__fav-btn">
      <svg
        class="cards__heart"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.1031 4.2258C18.6349 3.75739 18.079 3.38581 17.4672 3.13229C16.8554 2.87878 16.1996 2.74829 15.5373 2.74829C14.875 2.74829 14.2192 2.87878 13.6074 3.13229C12.9955 3.38581 12.4396 3.75739 11.9715 4.2258L10.9998 5.19746L10.0281 4.2258C9.0824 3.28008 7.79973 2.74878 6.46228 2.74878C5.12484 2.74878 3.84217 3.28008 2.89645 4.2258C1.95073 5.17152 1.41943 6.45418 1.41943 7.79163C1.41943 9.12908 1.95073 10.4117 2.89645 11.3575L3.86812 12.3291L10.9998 19.4608L18.1315 12.3291L19.1031 11.3575C19.5715 10.8893 19.9431 10.3334 20.1966 9.72154C20.4501 9.1097 20.5806 8.45391 20.5806 7.79163C20.5806 7.12935 20.4501 6.47356 20.1966 5.86172C19.9431 5.24988 19.5715 4.69399 19.1031 4.2258V4.2258Z"
          stroke="#F8F8F8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="cards__descr">
      <h4 class="cards__title">${title}</h4>
      <p class="cards__text">
        ${description}
      </p>
      <div class="cards__info">
        <div class="cards__rating rating">
          <div class="rating__value">${rating}</div>
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
        </div>
        <button class="btn btn-primary cards__btn">See recipe</button>
      </div>
    </div>
  </li>
    `;
}
