import axios from 'axios';

export async function getAllRecipes(url, params = {}) {
  const {
    category = '',
    area = '',
    time = '',
    title = '',
    ingredient = '',
    limit = 6,
    page = 1,
  } = params;
  const response = await axios.get(`${url}/?`, {
    params: {
      category,
      area,
      time,
      title,
      ingredient,
      limit,
      page,
    },
  });

  return response.data;
}
