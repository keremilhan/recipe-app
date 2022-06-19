import React from 'react'
import { StyledHeader, Nav, Menu } from './styles/Header.styled'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
        <Nav>
            <h1>
              <Link to="/">Recipes</Link>
            </h1>
            <Menu>
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
                  <Link to="/logout">Logout</Link>
                </li>
            </Menu>
        </Nav>
        <Outlet />
    </StyledHeader>
  )
}

export default Header