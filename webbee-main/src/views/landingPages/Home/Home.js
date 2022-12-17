import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Container from 'common/Container';
import { Hero, TopBar } from './components';
import { AppContext } from 'App';
import { useNavigate } from 'react-router-dom';

// import Container from 'common/Container';

export const HomeViewContext = createContext();

let mainUrl = process.env.REACT_APP_MAIN_SERVER;

const Home = () => {
  // const theme = useTheme();
  const [allLeads, setAllLeads] = useState([]);
  const navigate = useNavigate();

  const initFetch = async () => {
    const resp = await fetch(`${mainUrl}/all`);
    const data = await resp.json();
    setAllLeads(data);
    console.log(data);
  };

  const { userId, isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
    initFetch();
  }, []);

  return (
    <HomeViewContext.Provider
      value={{
        allLeads,
        setAllLeads,
      }}
    >
      <Box>
        {userId}
        {JSON.stringify(isLoggedIn)}
        <TopBar />
        <Hero />
      </Box>
    </HomeViewContext.Provider>
  );
};

export default Home;
