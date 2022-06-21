import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { StyledCard, CardHeader, CardImage } from './styles/Card.styled';
import defaultImage from '../../src/assets/default-image.jpg'

const Card = ({recipe, recipe : {recipe : {label, image}}}) => {
  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };
  return (
    <StyledCard>
        <CardHeader>{label}</CardHeader>
        <CardImage src={image ? image : defaultImage} alt={label.toLowerCase()} />
        <div>
          <Button onClick={moreClick} text="Details"></Button>
        </div>
    </StyledCard>
  )
}

export default Card