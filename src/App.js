import React from 'react';
import { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import { recipeService } from './services';

import {
  Error404Page,
  HomePage,
  ViewRecipePage,
} from './pages';

import { addRecipes } from './store/reducers/recipes/actions';

import { PrivateRoute } from './routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => window.scroll(0, 0), [pathname]);

  return null;
};

const App = props => {
  const { addRecipes } = props;

  useEffect(() => (async () => {
    const { data } = await recipeService.getRecipes$();
    addRecipes(data);
  })());

  return (
    <>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/"
                 component={HomePage}
                 exact />
          <PrivateRoute path="/view/:uuid"
                        component={ViewRecipePage}
                        exact />
          <Route path="*"
                 component={Error404Page} />
        </Switch>
      </Router>
    </>
  );
};

export default connect(null, { addRecipes })(App);
