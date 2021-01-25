import React from 'react';
import { useContext } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import {
  People,
  Timer,
} from '@material-ui/icons';

import { RecipeContext } from '../../contexts/RecipeContext';

import { RecipeTab } from './';

const RecipeDetails = () => {
  const recipe = useContext(RecipeContext);

  return (
    <Grid spacing={3}
          container>
      <Grid xs={12}
            sm={6}
            md={4}
            item>
        <Card className="mb-3">
          <CardMedia image={`${process.env.REACT_APP_FAKE_API}${recipe.images.full}`}
                     alt={recipe.title}
                     style={{
                       height: '250px',
                     }} />
        </Card>
        <Card className="mb-3">
          <CardContent>
            <Typography className="mb-1"
                        variant="h5"
                        component="h1">{recipe.title}</Typography>
            <Typography className="mb-2"
                        variant="body1"
                        component="h2">{recipe.description}</Typography>
            <Typography className="d-flex">
              <Timer className="mr-2" /> {recipe.prepTime} mins
            </Typography>
            <Typography className="d-flex">
              <People className="mr-2" /> {recipe.servings} pax
            </Typography>
          </CardContent>
        </Card>
        <Button component={RouterLink}
                to="/">Go Back</Button>
      </Grid>
      <Grid item
            xs>
        <RecipeTab />
      </Grid>
    </Grid>
  );
};

export default RecipeDetails;
