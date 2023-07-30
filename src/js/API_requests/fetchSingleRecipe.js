import axios from 'axios';

export async function fetchSingleRecipe(id) {
  const response = await axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${id}`
  );

  return response.data;
}
