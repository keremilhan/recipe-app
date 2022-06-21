import styled from "styled-components";

export const StyledDetails = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100vw;
    margin; auto;
`

export const Header = styled.div`
    margin-top: 5rem;
    font-size:2rem;
`

export const RecipeContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #8BACAB;
    width: 90vw;
    padding: 5rem 0;
    gap: 2rem;
    border-radius: 40px;
`

export const WrapperContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        width: 70vw;
        gap: 1rem;
    }
`

export const ImgContainer = styled.div`
    @media only screen and (max-width: 600px) {
        width: 70vw;
    }
    img{
        border-radius: 20px;
        @media only screen and (max-width: 1000px) {
            width: 100%;
        }
    }

`

export const NutrientsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 33vw;
    width: 33vw;
    min-height: fit-content;
    height: 40vh;
    gap: 1.75rem;
    background-color: #303030;
    border-radius: 20px;
    padding-left: 2rem;
    h2{
        font-size: 2rem;
        text-align: center;
    }
    @media only screen and (max-width: 1000px) {
        min-width: 100%;
    }

`

export const IngredientsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flew-wrap: wrap;
    background-color: #303030;
    max-width: 33vw;
    width: 33vw;
    min-height: fit-content;
    border-radius: 20px;
    padding-left: 2rem;
    h2{
        margin-bottom: 1.75rem;
        font-size: 2rem;
        text-align: center;
    }
    @media only screen and (max-width: 1000px) {
        min-width: 100%;
    }

`

