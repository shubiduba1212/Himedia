import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* { margin: 0; padding:0; box-sizing: border-box; font-family: "Montserrat", "Noto Sans KR", sans-serif;}
header, footer, main, section, article, aside, div {margin: 0; padding:0;}
a, p, h1, h2, h3, h4, h5, h6 {margin: 0; padding:0; text-decoration: none; color: #28282A;}
ul, ol, li {list-style: none; margin:0; padding:0;}
button {outline: none;}
input {outline: none;}
body {margin: 0 auto;}
`

export default GlobalStyle;