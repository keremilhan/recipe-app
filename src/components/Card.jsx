import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

const Card = ({recipe, recipe : {recipe : {label, image}}}) => {
  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };
  return (
    <div>
        <h1>{label}</h1>
        <img src={image} alt={label.toLowerCase()} />
        <Button onClick={moreClick} text="View More"></Button>
    </div>
  )
}

export default Card