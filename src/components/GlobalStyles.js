import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
    }
    h1 { 
        font-family: 'Lora', serif;
        font-style: italic;
        color: #047083;
    }
    

`;

export default GlobalStyles;
