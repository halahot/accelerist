import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }

    body, html {
        height: 100%;
    }

    body { 
        position: relative;
        z-index: 0;
    }

    a {
        text-decoration: none;
    }
    #root{
        margin:0 auto;
        height: 100%;
    }

    html, body, *, ::before, ::after {
        box-sizing: border-box;
    }

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0px;
    }
    `