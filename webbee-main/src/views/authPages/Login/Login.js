import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Sidebar, Form } from './components';

const Login = ({ themeMode = 'light' }) => {
  return (
    <Box
      position={'relative'}
      //  minHeight={'100vh'}
      display={'flex'}
    >
      <Box
        // bgcolor={'alternate.main'}
        display={'flex'}
        alignItems={'center'}
        width={'100%'}
        height={'100%'}
      >
        <Container maxWidth={800}>
          <Form />
        </Container>
      </Box>
    </Box>
  );
};

Login.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Login;
