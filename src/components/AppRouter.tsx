import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import About from "../pages/About";
import Login from "../pages/Login";
import Corpus from "../pages/Corpus";
import Help from "../pages/Help";
import React from "react";


const AppRouter: React.FC = () => {
    return (
        <div className="playground">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/corpus" element={<Corpus />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;
