import { useState } from 'react'
import { StyledHome } from '../styles/Home.styled'
import Form from '../Form'


const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("search");
  }
  return (
    <StyledHome>
        <h1>Food Recipes</h1>
        <Form onSubmit={handleSearch}/>
    </StyledHome>
  )
}

export default Home