import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import OnBoarding from './pages/OnBoarding';
import MyList from './pages/MyList';
import CreateList from './pages/CreateList';
import CreateList2 from './pages/CreateList2';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/step1" element={<CreateList />} />
        <Route path="/step2" element={<CreateList2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
