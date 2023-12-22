import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Input from './input/input';
import Main from './Components/Main/Main';
import FiltredProducts from './Components/FiltredProducts/FiltredProducts';
import SingleProduct from './Components/FiltredProducts/SingleProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/input" element={<Input />} />
          <Route path="/filteredProducts/:type" element={<FiltredProducts />} />
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
