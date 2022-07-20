import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import MainPart from "./MainPart";
import NotFound from "./NotFound";
import About from "./About";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPart />} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="about" element={<About />} />
      <Route path="notfound" element={<NotFound />} />

      <Route path="*" element={<Navigate to="notfound" />} />
    </Routes>
  );
};

export default Home;
