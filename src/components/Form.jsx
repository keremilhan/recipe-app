import React from 'react'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { useLogin } from './context/LoginContext';

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  const {login, setLogin} = useLogin()
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(login == false){
      alert("Please login in order to search recipes")
      setTimeout(() => {
        navigate("/login", { state: { login } });
      }, 500);
      
    }else{
      getData();
    }

  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Input type="search" placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type='submit' text="Search"/>
        <select id="mealTypes" name="mealTypes" onChange={(e) => setMeal(e.target.value)}>
          {
            mealTypes?.map((item,index) =>{
              return <option key={index} value={item.toLowerCase()}>
                {item}
              </option>
            })
          }
        </select>
      </form>
    </>
  )
}

export default Form