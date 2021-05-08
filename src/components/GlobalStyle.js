import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-size: 62.5%;
    font-family: 'Itim', cursive;
    background: #28262C;
    text-align: center;
}

h1 {
    font-size: 4.8rem;
}
h2 {
    font-size: 3.6rem;
}
h3 {
    font-size: 2.4rem;
}
h4 {
    font-size: 2rem;
}

h5, h6 {
    font-size: 1.9rem;
}

p, input, li, a {
    font-size: 1.6rem;
}
`;

export default GlobalStyle;
