import './js/localctorage';
import axios from 'axios';

const categoriesList = document.querySelector('.category-button-list');

const LOCAL_STORAGE_KEY = 'recipe';

// const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
const localStorageData =
  '["6462a8f74c3d0ddd28897fc1", "6462a8f74c3d0ddd28897fbc", "6462a8f74c3d0ddd28897fb9", "6462a8f74c3d0ddd28897fdf", "6462a8f74c3d0ddd28897fc2", "6462a8f74c3d0ddd28897fbf"]';
// const getFromlocalStorage = LOCAL_STORAGE_KEY => {
//   try {
//     const parsedLocalStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     return parsedLocalStorageData === null
//       ? undefined
//       : JSON.parse(parsedLocalStorageData);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
const parsedLocalStorageData = JSON.parse(localStorageData);

const categoriesListMarkup = parsedLocalStorageData.map(element => {
  getRecipeById(element)
    .then(({ data }) => {
      categoriesList.insertAdjacentHTML(
        'afterbegin',
        `<li class="category-button-item">
        <button type="button" class="category-button-button btn">${data.category}</button>
    </li>`
      );
    })
    .catch(error => console.log('error'));
  //   console.log(categoriesDataBut);
});
// const categoriesDataBut = parsedLocalStorageData.map(element => {
//   console.log(element);
//   getRecipeById(element)
//     .then(({ data }) => {
//       console.log(data.category);
//       return data.category;
//     })
//     .catch(error => console.log('error'));
// });

// const categoriesListMarkup = categoriesDataBut
//   .map(
//     element =>
//       `<li class="category-button-item">
//         <button type="button" class="category-button-button btn">${element}</button>
//     </li>`
//   )
//   .join('');
// console.log(categoriesListMarkup);

function getRecipeById(_id) {
  const response = axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${_id}`
  );
  return response;
}

// getRecipeById('6462a8f74c3d0ddd28897fc1')
//   .then(console.log(getRecipeById('6462a8f74c3d0ddd28897fc1')))
//   .catch(console.log('errr'));
