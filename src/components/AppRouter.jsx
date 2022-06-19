import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import { LoginProvider } from './context/LoginContext';
import { useLogin } from './context/LoginContext';


const AppRouter = () => {
  const {login, setLogin} = useLogin;
  return (
    <>
    <LoginProvider>
    <Router>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>      
    </Router>
    </LoginProvider> 
    </>
    )
}

export default AppRouter