import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

import { Navbar } from '../shared/components';

const DefaultLayout = props => {
  const { children } = props;

  const classes = makeStyles(theme => ({
    root: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  }))();

  return (
    <>
      <Navbar />
      <Container className={classes.root}>
        {children}
      </Container>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
