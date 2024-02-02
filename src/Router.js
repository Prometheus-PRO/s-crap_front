import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnBoarding from "./pages/OnBoarding";
import MyList from "./pages/MyList";
import CreateList from "./pages/CreateList";
import CreateList2 from "./pages/CreateList2";
import PlayMusic from "./pages/PlayMusic";
import PlayList from "./pages/PlayList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/step1" element={<CreateList />} />
        <Route path="/step2" element={<CreateList2 />} />
        <Route path="/playmusic" element={<PlayMusic />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
