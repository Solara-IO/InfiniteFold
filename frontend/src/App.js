import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfiniteFold from './components/InfiniteFold';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfiniteFold />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
