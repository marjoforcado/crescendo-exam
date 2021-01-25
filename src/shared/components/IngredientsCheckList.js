import React from 'react';
import { useState } from 'react';

import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

const IngredientsCheckList = props => {
  const { ingredients } = props;

  const [checked, setChecked] = useState([]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    }
    else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Ingredients
      </ListSubheader>
    }>
      {
        ingredients.map((ingredient, index) => {
          const labelId = `checkbox-list-label-${ingredient.uuid}`;

          return (
            <ListItem key={ingredient.uuid}
                      onClick={e => handleToggle(index)}
                      dense
                      button>
              <ListItemIcon>
                <Checkbox edge="start"
                          checked={checked.indexOf(index) !== -1}
                          tabIndex={-1}
                          inputProps={{'aria-labelledby': labelId}}
                          disableRipple />
              </ListItemIcon>
              <ListItemText id={labelId}
                            primary={`${ingredient.amount} ${ingredient.measurement} ${ingredient.name}`} />
            </ListItem>
          );
        })
      }
    </List>
  );
};

export default IngredientsCheckList;