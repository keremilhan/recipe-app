import React from 'react'
import { StyledInput } from './styles/Input.styled'

const Input = ({placeholder}) => {
  return (
    <StyledInput type="text" placeholder={placeholder} />
  )
}

export default Input