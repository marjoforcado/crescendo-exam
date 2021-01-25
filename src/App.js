import React from 'react';
import { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import {
  Error404Page,
  HomePage,
} from './pages';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => window.scroll(0, 0), [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/"
                 component={HomePage}
                 exact />
          <Route path="*"
                 component={Error404Page} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
