import localctorage from './localctorage';
import axios from 'axios';
// {
//     _id: '6462a8f74c3d0ddd28897fc1',
//     title: 'Chocolate Gateau',
//     category: 'Dessert',
//     description:
//       'A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.',
//     preview:
//       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg',
//     time: '75',
//     rating: 3,
//   }
const URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/';
const KEY = 'favCards';
const cardArr = {};

async function getInfo(url, id) {
  const response = await axios.get(`${url}/${id}`);

  return response.data;
}

async function onBtnClick(e) {
  const target = e.target;
  if (target.matches('svg.cards__heart')) {
    const listItem = target.parentElement;
    const id = listItem.dataset.id;
    if (!cardArr[id]) {
      const data = await getInfo(URL, id);
      cardArr[id] = data;
      localctorage.save(KEY, cardArr);
    }
  }
}

const recipeList = document.querySelector('.cards__list');

recipeList.addEventListener('click', onBtnClick);
