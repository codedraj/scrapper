import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import 'react-image-lightbox/style.css';
export const AppContext = createContext();

const App = () => {
  const [comments, setComments] = useState('');
  const [dealStatus, setDealStatus] = useState('');
  const [id, setId] = useState('');
  const [bName, setBName] = useState('');
  // comments: 'No Comments',
  // dealStatus: 0,
  const [link, setLink] = useState('');
  const [salesRep, setSalesRep] = useState('');
  const [number, setNumber] = useState('');
  // number: '+6012-3881163',
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  return (
    <AppContext.Provider
      value={{
        userId,
        setUserId,
        isLoggedIn,
        setIsLoggedIn,
        comments,
        setComments,
        dealStatus,
        setDealStatus,
        bName,
        setBName,
        link,
        setLink,
        number,
        setNumber,
        id,
        setId,
        salesRep,
        setSalesRep,
        isVerified,
        setIsVerified,
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
