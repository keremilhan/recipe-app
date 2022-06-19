import React from 'react'
import { StyledInput } from './styles/Input.styled'

const Input = ({placeholder, value, onChange}) => {
  return (
    <StyledInput type="text" placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input