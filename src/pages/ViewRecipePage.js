import React from 'react';

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux'

import DefaultLayout from '../layouts/DefaultLayout';

import { RecipeDetails } from '../shared/components';

const ViewRecipePage = () => {
  const { uuid } = useParams();

  const recipe = useSelector(state => state.recipeReducer.recipes.find(recipe => recipe.uuid === uuid));

  return (
    <DefaultLayout>
      <RecipeDetails recipe={recipe} />
    </DefaultLayout>
  );
};

export default ViewRecipePage;
