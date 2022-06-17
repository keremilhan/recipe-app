import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Github from './Pages/Github';
import Logout from './Pages/Logout';
import Contact from './Pages/Contact';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="github" element={<Github />} />
                <Route path="logout" element={<Logout />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>      
    </Router> 
    )
}

export default AppRouter