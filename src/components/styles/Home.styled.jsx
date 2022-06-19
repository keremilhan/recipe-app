import styled from "styled-components";

export const StyledHome = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    
    h1{
        margin-top: 3rem;
    }

    form{
        height: 55px;
        display: flex;
        gap: 1rem;
        outline: 1px solid white;
        padding: 7px;
        border-radius: 5px;
    }

    input {
        height: 100%;
        border: none;
        outline: none;
        padding-left: 0.75rem;
        font-size: 1.3rem;
        display: block;
        border-radius: 3px;

    }

    button{
        height: 100%;
        border: none;
        outline: none;
        width: 4rem;
        font-size: 1.1rem;
        border-radius: 3px;
        cursor: pointer;
        background-color: #8BACAB;
        color: white;
    }

    select{
        width: 7rem;
        font-size: 1.1rem;
        border: none;
        outline: none;
        border-radius: 3px;
        padding-left: 0.50rem;
        cursor: pointer;
    }

`