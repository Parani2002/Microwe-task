import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage'; 
import Contactus from './Contactus'; 

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>
 );
}

export default App;
