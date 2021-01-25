import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';

import { RecipeList } from '../shared/components';

const HomePage = () => (
  <DefaultLayout>
    <RecipeList />
  </DefaultLayout>
);

export default HomePage;
