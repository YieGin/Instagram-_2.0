import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/MainPage/LandingPage";
import LeftPage from "./LandingPage/LeftPage/LeftPage";
import Explore from "./LandingPage/explore/explore";
import Messages from "./LandingPage/Messages/Messages";
import LandingPageList from "./LandingPage/LandingPageList/LandingPageList";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/" element={<LeftPage />}></Route>
        <Route path="/" element={<LandingPageList />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        <Route path="/Messages" element={<Messages />}></Route>
        <Route path="/test" element={<test />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
