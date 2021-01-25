import React from 'react';

import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom';

import { RecipeContext } from '../contexts/RecipeContext';

import DefaultLayout from '../layouts/DefaultLayout';

import { RecipeDetails } from '../shared/components';

const ViewRecipePage = () => {
  const { uuid } = useParams();

  const recipe = useSelector(state => state.recipeReducer.recipes.find(recipe => recipe.uuid === uuid));

  return (
    <DefaultLayout>
      <RecipeContext.Provider value={recipe}>
        <RecipeDetails />
      </RecipeContext.Provider>
    </DefaultLayout>
  );
};

export default ViewRecipePage;
