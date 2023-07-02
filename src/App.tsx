import "./App.css";
import * as React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home}/>
          <Route path="/learn" Component={Learn}/>
          <Route path="/about" Component={About}/>
          <Route path="/login" Component={Login}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
