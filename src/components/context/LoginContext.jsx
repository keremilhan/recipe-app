import { createContext, useState, useContext } from 'react';

const LoginContext = createContext();

const LoginProvider = ({children}) => {
    
    const [login, setLogin] = useState(false)
    const values = {login, setLogin}
    return <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
}

const useLogin = () => useContext(LoginContext)

export {useLogin, LoginProvider}