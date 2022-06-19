import React from 'react'
import { StyledButton } from './styles/Button.styled'

const Button = ({text, type, onClick}) => {
  return (
    <StyledButton type={type} onClick={onClick}>{text}</StyledButton>
  )
}

export default Button