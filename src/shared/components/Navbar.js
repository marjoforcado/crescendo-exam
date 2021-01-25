import React from 'react';

import {
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { AppBar } from '../../themes/crescendo';

const Separator = () => <div style={{flexGrow: 1}} />;

const Navbar = () => (
  <AppBar position="relative">
    <Toolbar variant="dense"
             disableGutters>
      <Container>
        <Typography variant="h6">Crescendo Recipe</Typography>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Navbar;
