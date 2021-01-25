import React from 'react';
import { useState } from 'react';

import {
  Box,
  Tab,
  Tabs,
} from '@material-ui/core';

import {
  DirectionCheckList,
  IngredientsCheckList,
} from './';

const TabPanel = props => {
  const {
    children,
    value,
    index,
    ...others
  } = props;

  return (
    <div role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...others}>
      {
        value === index && (
          <Box p={3}>{children}</Box>
        )
      }
    </div>
  );
};

const RecipeTab = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, value) => setValue(value)}
        aria-label="disabled tabs example"
      >
        <Tab label="Ingredients" />
        <Tab label="Directions" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <IngredientsCheckList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DirectionCheckList />
      </TabPanel>
    </>
  );
};

export default RecipeTab;