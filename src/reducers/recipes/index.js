import * as actionTypes from './action-types';

const initialState = {
  recipes: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RECIPES: {
      return {
        ...state,
        recipes: [
          ...state.recipes,
          ...action.recipes,
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default recipeReducer;
