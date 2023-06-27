export const fetchCategories = async () => {
  try {
    const response = await fetch(
      'https://tasty-treats-backend.p.goit.global/api/categories'
    );
    const dataDetails = await response.json();
    const categories = dataDetails.map(category => category.name);

    return categories;
  } catch (error) {
    console.error('ERROR', error);
    return [];
  }
};
