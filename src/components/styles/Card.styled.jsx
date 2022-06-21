import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 375px;
    background-color: #787586;
    gap: 0.75rem;
    padding-bottom: 0.50rem;
    justify-content: space-around;
    border-radius: 20px;
    cursor: pointer;
    transition: transform ease-in-out 0.5s;

    &:hover{
        transform: scale(1.05);
    }

    div{
        min-height: 2rem;
    }
`

export const CardHeader = styled.h1`
    font-size: 1rem;
    text-align: center;
`

export const CardImage = styled.img`
    min-height: 200px;
    border-radius: 10px
`