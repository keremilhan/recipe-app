import React from 'react'
import { StyledContact } from '../styles/Contact.styled'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <StyledContact>
      <h1>Contact</h1>
      <div> 
        <a href="https://github.com/keremilhan" target="_blank"><FaGithub size={70} color="white"/></a>
        <a href="https://www.linkedin.com/in/keremilhan/" target="_blank"><FaLinkedin size={70} color="white"/></a>
      </div>
    </StyledContact>
  )
}

export default Contact