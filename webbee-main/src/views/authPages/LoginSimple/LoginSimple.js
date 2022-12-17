import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Form } from './components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginSimple = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/all');
    }
  }, []);
  return (
    <Box
      position={'relative'}
      minHeight={'calc(100vh - 247px)'}
      display={'flex'}
      flexDirection="row"
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
    >
      <Container flex={1} maxWidth={600}>
        <Form />
      </Container>
    </Box>
  );
};

export default LoginSimple;
