import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Cherche from './pages/Cherche'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cherche" element={<Cherche />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;