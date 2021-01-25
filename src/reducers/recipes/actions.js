import * as actionTypes from './action-types';

export const addRecipes = recipes => ({
  type: actionTypes.ADD_RECIPES,
  recipes,
});
