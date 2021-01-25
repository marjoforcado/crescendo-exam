import React from 'react';
import {
  useContext,
  useState,
} from 'react';

import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

import { RecipeContext } from '../../contexts/RecipeContext';

const DirectionCheckList = () => {
  const { directions } = useContext(RecipeContext);

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
    <List>
      {
        directions.map((direction, index) => {
          const labelId = `checkbox-list-label-${direction.index}`;

          return (
            <ListItem key={index}
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
                            primary={direction.instructions}
                            secondary={direction.optional ? 'Optional' : ''} />
            </ListItem>
          );
        })
      }
    </List>
  );
};

export default DirectionCheckList;
