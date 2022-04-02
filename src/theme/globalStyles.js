import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        
        padding: 0;
        border: 0;
        margin: 0;

        text-decoration: none;
        font-weight: normal;

        color: #666;
    }

    body {
        font-family: 'Lexend Deca', sans-serif;
    }
`;

export default GlobalStyle;