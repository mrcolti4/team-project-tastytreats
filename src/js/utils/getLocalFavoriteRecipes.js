import localctorage from './localctorage';

export const getLocalFavRecipes = key => {
  return Object.values(localctorage.load(key));
};
