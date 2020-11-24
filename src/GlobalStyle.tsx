import { createGlobalStyle } from "styled-components";
import { darkBlack, white, blue } from "./constants/colors";
const GlobalStyle = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,100&display=swap');

  body {
    background-color:${darkBlack};
    margin: 0;
    padding: 0;
  }
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
html{
    font-family: 'Lato', 'Arial',sans-serif;
    font-weight: 300;
    font-size: 10px;
    
    text-rendering: optimizeLegibility; 
}
p,a{
  color:${white}
}
button:focus {
 outline: none !important;
}
.blue-text{
  color:${blue}
}
`;

export default GlobalStyle;
