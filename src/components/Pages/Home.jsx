import React from 'react'
import { StyledHome } from '../styles/Home.styled'

const Home = () => {
  return (
    <StyledHome>
        <h1>Food Recipes</h1>
        <form action="">
            <input type="text" placeholder='Search'/>
            <button type='submit'>Search</button>
            <select id="cars" name="cars">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="teatime">Teatime</option>
            </select>
        </form>
    </StyledHome>
  )
}

export default Home