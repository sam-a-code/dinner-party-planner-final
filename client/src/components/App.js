import '../App.css'
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom"
import Signup from './Signup';
import Home from './Home'

//add handle submit function


function App() {
  return (
    <div className="App">
      <Signup />
      <Home />
    </div>
  );
}

export default App;
