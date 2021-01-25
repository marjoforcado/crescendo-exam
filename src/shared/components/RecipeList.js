import React from 'react';

import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';

import { Info } from '@material-ui/icons';

import { connect } from 'react-redux';

const RecipeList = props => {
  const { recipes } = props;

  console.log(recipes);

  const recipeList = recipes.map(recipe => (
    <GridListTile key={recipe.uuid}>
      <img src={`${process.env.REACT_APP_FAKE_API}${recipe.images.medium}`}
           alt={recipe.title} />
      <GridListTileBar title={recipe.title}
                       subtitle={`${recipe.prepTime} mins`}
                       actionIcon={
                         <IconButton style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                          <Info />
                         </IconButton>
                       } />
    </GridListTile>
  ));

  return (
    <div>
      <GridList cellHeight={200}
                cols={3}>
        {recipeList}
      </GridList>
    </div>
  );
};

const mapStateToProps = state => ({
  recipes: state.recipeReducer.recipes,
});

export default connect(mapStateToProps)(RecipeList);
