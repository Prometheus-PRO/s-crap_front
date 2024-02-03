import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyList from './pages/MyList';
import OthersList from './pages/OthersList';
import CreateList from './pages/CreateList';
import When1 from './pages/ConditionCreate/CreateList1';
import When2 from './pages/ConditionCreate/CreateList2';
import When3 from './pages/ConditionCreate/CreateList3';
import When4 from './pages/ConditionCreate/CreateList4';
import Who1 from './pages/Who1';
import Who2 from './pages/Who2';
import Who3 from './pages/Who3';
import PlayMusic from './pages/PlayMusic';
import PlayList from './pages/PlayList';
import WhoPlay from './pages/WhoPlay';
import WhoList from './pages/WhoList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyList />} />
        <Route path="/otherslist" element={<OthersList />} />
        <Route path="/create" element={<CreateList />} />
        <Route path="/when1" element={<When1 />} />
        <Route path="/when2" element={<When2 />} />
        <Route path="/when3" element={<When3 />} />
        <Route path="/when4" element={<When4 />} />
        <Route path="/who1" element={<Who1 />} />
        <Route path="/who2" element={<Who2 />} />
        <Route path="/who3" element={<Who3 />} />
        <Route path="/whoplay" element={<WhoPlay />} />
        <Route path="/wholist" element={<WhoList />} />
        <Route path="/playmusic" element={<PlayMusic />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
