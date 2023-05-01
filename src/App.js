import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TopNavbar from './Components/TopNavbar';
import MidNavbar from './Components/MidNavbar';
import BottomBar from './Components/BottomBar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';


import Services from './Components/Pages/Services'
import Products from './Components/Pages/Products'
import ContactUs from './Components/Pages/ContactUs'
import SignUp from './Components/SignUp'
import Home from './Components/Pages/Home'
import Marketing from './Components/Pages/Marketing'
import Consulting from './Components/Consulting'


function App() {
  return (

    <Router>
      <TopNavbar />
      <MidNavbar />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/products' exact element={<Products/>} />
        <Route path='/contact-us' exact element={<ContactUs/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
        <Route path='/marketing' exact element={<Marketing/>} />
        <Route path='/consulting' exact element={<Consulting/>} />

      </Routes>
      <BottomBar />
    </Router>
    
  );
}

export default App;
