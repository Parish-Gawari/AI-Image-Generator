import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import CreatePost from "../pages/CreatePost";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  );
};

export default PageRoutes;
