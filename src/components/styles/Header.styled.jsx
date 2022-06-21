import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #8BACAB;
    width: 100vw;  
`

export const Nav = styled.nav`
    padding: 0 3rem;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 *{
        color: #fff;
    }

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`
export const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 4rem;
    font-size: 1.4rem;
    font-weight: bold;

    li {
        width: 90px;
        text-align: center;
    }

    @media only screen and (max-width: 1000px) {
        gap: 2rem;
    }
`