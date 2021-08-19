import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *, *:before, *:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Open Sans',arial,helvetica,sans-serif;
    font-size: 16px;
   
}`;

export default GlobalStyles;
