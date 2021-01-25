import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar as MUIAppBar,
} from '@material-ui/core';

const AppBar = props => {
  const {
    children,
    ...others
  } = props;

  const classes = makeStyles(() => ({
    colorPrimary: {
      backgroundColor: process.env.REACT_APP_COLOR_PRIMARY,
    },
    colorSecondary: {
      backgroundColor: process.env.REACT_APP_COLOR_SECONDARY,
    },
  }))();

  return <MUIAppBar classes={{
                      colorPrimary: classes.colorPrimary,
                      colorSecondary: classes.colorSecondary,
                    }}
                    {...others}>{children}</MUIAppBar>;
};

export default AppBar;
