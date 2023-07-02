import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import About from "../pages/About";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/home" element={Home} />
        <Route path="/learn" element={Learn} />
        <Route path="/about" element={About} />
        <Route path="/login" element={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
