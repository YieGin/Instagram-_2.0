import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/MainPage/LandingPage";
import LeftPage from "./LandingPage/LeftPage/LeftPage";
import Explore from "./LandingPage/explore/explore";
import Messages from "./LandingPage/Messages/Messages";
import LandingPageList from "./LandingPage/LandingPageList/LandingPageList";
import test from "./test";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/" element={<LeftPage />}></Route>
        <Route path="/" element={<LandingPageList />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        <Route path="/Messages" element={<Messages />}></Route>
        <Route path="/test" element={<test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
