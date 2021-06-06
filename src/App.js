import React from "react";
import './App.css';
import Header from "./Components/Header.js"
import "tachyons"
import Home from "./Components/Home.js"
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;