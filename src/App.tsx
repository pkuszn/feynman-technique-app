import "./App.css";
import * as React from "react";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/navigation/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
        <Navigation />
        <AppRouter/>
    </div>
  );
};

export default App;
