import React from 'react';

import { useSelector } from 'react-redux'

import { Button } from '@material-ui/core';

import {
  Link as RouterLink,
  useParams,
} from 'react-router-dom';

import { RecipeContext } from '../contexts/RecipeContext';

import DefaultLayout from '../layouts/DefaultLayout';

import { RecipeDetails } from '../shared/components';

const ViewRecipePage = () => {
  const { uuid } = useParams();

  const recipe = useSelector(state => state.recipeReducer.recipes.find(recipe => recipe.uuid === uuid));

  return (
    <DefaultLayout>
      <RecipeContext.Provider value={recipe}>
        <Button className="d-block d-sm-none mb-3"
                variant="contained"
                color="primary"
                to="/"
                size="large"
                component={RouterLink}
                fullWidth>Go Back</Button>
        <RecipeDetails />
        <Button className="d-block d-sm-none mt-3"
                variant="contained"
                color="primary"
                to="/"
                size="large"
                component={RouterLink}
                fullWidth>Go Back</Button>
      </RecipeContext.Provider>
    </DefaultLayout>
  );
};

export default ViewRecipePage;
