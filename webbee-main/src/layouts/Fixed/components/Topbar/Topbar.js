import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';

// import WebbeeLogo from 'svg/logos/Webbee';

const Topbar = ({ onSidebarOpen }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box
          marginRight={{ xs: 1, sm: 2 }}
          sx={{ display: { md: 'none', sm: 'block' } }}
        >
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          alignItems="center"
          component="a"
          underline="none"
          href="/"
          sx={{
            color: 'black',
            textDecoration: 'none',
            fontSize: 32,
            letterSpacing: 2,
          }}
          title="webbee"
          height={{ xs: 28, md: 32 }}
          width={45}
        >
          {/* <WebbeeLogo height={'100%'} width={'100%'} /> */}
          SalesPod
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          <Box>
            <Button
              onClick={() => {
                if (isLoggedIn) {
                  return;
                }
              }}
              variant="contained"
              color="primary"
              size="large"
            >
              {!window.localStorage.getItem('isLoggedIn') == true
                ? 'Sign Out'
                : 'Create An Account'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  // themeToggler: PropTypes.func.isRequired,
  // themeMode: PropTypes.string.isRequired,
  // setThemePalette: PropTypes.func.isRequired,
  // paletteType: PropTypes.string.isRequired,
};

export default Topbar;
