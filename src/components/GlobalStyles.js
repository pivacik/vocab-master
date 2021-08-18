import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
    font-family: "open sans",arial,helvetica,sans-serif;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
}`;

export default GlobalStyles;
