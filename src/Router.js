import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import MyList from './pages/MyList';
import OthersList from './pages/OthersList';
import CreateList from './pages/CreateList';
import When1 from './pages/ConditionCreate/CreateList1';
import When2 from './pages/ConditionCreate/CreateList2';
import When3 from './pages/ConditionCreate/CreateList3';
import When4 from './pages/ConditionCreate/CreateList4';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/otherslist" element={<OthersList />} />
        <Route path="/create" element={<CreateList />} />
        <Route path="/when1" element={<When1 />} />
        <Route path="/when2" element={<When2 />} />
        <Route path="/when3" element={<When3 />} />
        <Route path="/when4" element={<When4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
