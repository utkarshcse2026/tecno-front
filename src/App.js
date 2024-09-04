import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Map from './components/Map';
import Nav from './components/Nav';
import Techinput from './components/techinput';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/techinput" element={<Techinput />} />
          <Route path="/info" element={<h1>Technology Info</h1>} />
          <Route path="/compare" element={<h1>Compare</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
