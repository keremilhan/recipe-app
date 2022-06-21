
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background: #303030;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
        color: black;
    }
`

export default GlobalStyles;