import { useState } from 'react'
import { StyledForm } from '../styles/Login.styled'
import { StyledLogout } from '../styles/Logout.styled'
import Input from '../Input'
import Button from '../Button'
import { useLogin } from '../context/LoginContext'
import axios from 'axios'

const Login = () => {
  const {login, setLogin} = useLogin()
  console.log(login);
  const handleLogin = (e) => {
    e.preventDefault();
    setTimeout(()=>{
      setLogin(login ? false : true)
    },1000)
    console.log(login);
  }

  return (
    <>
    { !login ?
      <StyledForm>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button type="submit" text={login ? "Logout" : "Login"} onClick={handleLogin}/>
      </StyledForm>
      :
      <StyledLogout>You are logged in
        <Button type="submit" text={login ? "Logout" : "Login"} onClick={handleLogin}/>
      </StyledLogout>
    }

    </>

  )
}

export default Login