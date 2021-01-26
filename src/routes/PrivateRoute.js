import React from 'react';

import {
  Redirect,
  Route,
} from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = props => {
  const {
    children,
    recipes,
    ...others
  } = props;

  if (recipes.length === 0) {
    return <Route render={({ location }) => <Redirect to={{path: '/', state: { from: location }}} />} />;
  }

  return <Route component={children} 
                {...others} />;
};

const mapStateToProps = state => ({
  recipes: state.recipeReducer.recipes,
});

export default connect(mapStateToProps)(PrivateRoute);
