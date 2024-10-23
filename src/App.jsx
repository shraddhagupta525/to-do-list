import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />  
          <Route path="/home" element={<Home />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
