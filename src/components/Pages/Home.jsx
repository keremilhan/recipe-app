import React from 'react'
import { StyledHome } from '../styles/Home.styled'

const Home = () => {
  return (
    <StyledHome>
        <h1>Food Recipes</h1>
        <form action="">
            <input type="text" />
            <button type='submit'>Search</button>
            <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        </form>
    </StyledHome>
  )
}

export default Home