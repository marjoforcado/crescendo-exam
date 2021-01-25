import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Button } from '@material-ui/core';

const RecipeDetails = props => {
  const { recipe } = props;

  return (
    <>
      <div>{recipe.title}</div>
      <Button component={RouterLink}
              to="/">Go Back</Button>
    </>
  );
};

export default RecipeDetails;
