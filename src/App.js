import React, { useState, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import throttle from 'lodash/throttle';

import './styles/reset.css';

const App = () => {
  const [vh, setVh] = useState(window.innerHeight * 0.01);

  const setScreenSize = () => {
    setVh(window.innerHeight * 0.01);
  };

  const handleResize = throttle(() => {
    setScreenSize();
  }, 200);

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div style={{ height: `${vh * 100}vh` }}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
};

export default App;
