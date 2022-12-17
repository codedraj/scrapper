import React from 'react';
import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const NavLink = ({ title, link }) => {
//   return (
//     <a
//       style={{
//         paddingLeft: '20px',
//         color: 'white',
//         textDecoration: 'none',
//       }}
//       href={link}
//     >
//       {title}
//     </a>
//   );
// };

// NavLink.propTypes = {
//   title: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
// };

// const items = [
//   {
//     title: 'Add Leads',
//     link: '/',
//   },

//   {
//     title: 'All Leads',
//     link: '/all',
//   },

// {
//   title: 'Get Data',
//   link: '/',
// },
// ];

const Topbar = () => {
  // const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      width={'100%'}
      height={'6vh'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box
          marginRight={{ xs: 1, sm: 2 }}
          sx={{ display: { md: 'none', sm: 'block' } }}
        ></Box>
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
      {/* {items.map((x, i) => {
        return <NavLink key={i + 1} title={x.title} link={x.link} />;
      })} */}
    </Box>
  );
};

export default Topbar;
