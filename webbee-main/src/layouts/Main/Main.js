import React from 'react';
import PropTypes from 'prop-types';

import useScrollTrigger from '@mui/material/useScrollTrigger';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { AppBar } from '@mui/material';
import { Topbar } from './components';
import Container from 'common/Container';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

const Main = ({ children }) => {
  return (
    <div>
      <AppBar position={'fixed'} elevation={0}>
        <Container paddingY={{ xs: 1 / 2, sm: 1 }} maxWidth={{ md: '100%' }}>
          <Topbar />
        </Container>
      </AppBar>
      <main>
        <Box height={{ xs: 56, sm: 64 }} />
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Main;
