import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Events from './pages/Events';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' exact component={Home} />
        <Route path='/Header' element={<Header/>} />
        <Route path='/Events' element={<Events/>} />
        <Route path='/Footer' element={<Footer/>} />
       
      </Routes>
    </Router>
  );
}
  
export default App;