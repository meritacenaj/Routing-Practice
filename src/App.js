import React from "react";
import About  from "./components/About";
import Home from "./components/Home";
import Number from "./components/Number";
import { useState } from "react";

import {
  BrowserRouter, Link, Route, Routes,
} from "react-router-dom";
    
function App() {
   const [results, setResults]= useState([]);


  return (
    <BrowserRouter>
    <Routes>
        
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/:nr/:color/:bgcolor"  element={<Number />} />
        <Route exact path="/:nr"  element={<Number />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;