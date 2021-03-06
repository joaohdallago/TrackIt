import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        
        padding: 0;
        border: 0;
        margin: 0;

        font-weight: normal;
        font-style: normal;
        text-decoration: none;

        background-color: transparent;
    }

    body {
        font-family: 'Lexend Deca', sans-serif;

        color: #666;
    }
`;

export default GlobalStyle;