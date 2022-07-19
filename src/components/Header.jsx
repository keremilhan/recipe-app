import React from 'react'
import { useState } from 'react';
import { StyledHeader, Nav, Menu, Hamburger, Flex } from './styles/Header.styled'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { useLogin } from './context/LoginContext';
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const {login, setLogin} = useLogin();
  return (
    <StyledHeader>
      <Flex>
        <Nav>
            <h1>
              <Link to="/">Recipes</Link>
            </h1>
            <Hamburger onClick={()=> setIsOpen(!isOpen)}>
              <GiHamburgerMenu size={30} />
            </Hamburger>
        </Nav>
        <Menu isOpen={isOpen} onClick={()=> setIsOpen(false)}>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a href="https://github.com/keremilhan" target="_blank">Github</a>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/login">{login ? "Logout" : "Login"}</Link>
                </li>
        </Menu>    
      </Flex>
      <Outlet />
    </StyledHeader>
  )
}

export default Header