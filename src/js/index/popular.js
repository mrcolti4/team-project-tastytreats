import { finallInitPage } from '../pop-up';
import { fetchPopular } from '../API_requests/fetchPopular';
const refs = {
  list: document.querySelector('.popular-list'),
  list_mobile: document.querySelector('.popular-list.mobile'),
};

function renderPopular(arrayResp) {
  const markup = arrayResp
    .map(({ title, description, preview, _id }) => {
      return `
        
         <li class="popular-item" data-id="${_id}">
      <div class="popular-wraper">
        <img
          class="popular-img"
          src="${preview}"
          alt="${title}"
          loading="lazy"
          height="64"
          width="64"
        />
      </div>
      <div class="popular-containet-description">
        <h3 class="popular-title">${title}</h3>
        <p class="popular-description">${description}</p>
      </div>
    </li>`;
    })
    .join('');

  refs.list.insertAdjacentHTML('beforeend', markup);
  refs.list_mobile.insertAdjacentHTML('beforeend', markup);
}

async function popularFetchAndRender() {
  const data = await fetchPopular();
  renderPopular(data);
}

popularFetchAndRender();

refs.list.addEventListener('click', e => {
  const refLI = e.target.closest('.popular-item');
  try {
    let is = refLI.nodeName;
  } catch (error) {
    return;
  }
  finallInitPage(refLI.dataset.id);
});
refs.list_mobile.addEventListener('click', e => {
  const refLI = e.target.closest('.popular-item');
  try {
    let is = refLI.nodeName;
  } catch (error) {
    return;
  }
  finallInitPage(refLI.dataset.id);
});
