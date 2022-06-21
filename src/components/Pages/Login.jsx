import { useState } from 'react'
import { StyledForm } from '../styles/Login.styled'
import { StyledLogout } from '../styles/Logout.styled'
import Input from '../Input'
import Button from '../Button'
import { useLogin } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {login, setLogin} = useLogin()
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if(username !== "" & password !== ""){
      setTimeout(()=>{
        setLogin(true)
        navigate("/", { state: { login } });
      },1000)
    }else if(login == true){
      setTimeout(() => {
        setLogin(false)
      }, 1000);
    }else{
      alert("Please don't leave the input fields empty")
    }
  }

  return (
    <>
    { !login ?
      <StyledForm>
        <Input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
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