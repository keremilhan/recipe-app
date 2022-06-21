import React from 'react'
import { StyledInput } from './styles/Input.styled'

const Input = ({placeholder, value, onChange, type}) => {
  return (
    <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input