import { createGlobalStyle } from "styled-components";
import { darkBlack, white, blue } from "./constants/colors";
const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'MyWebFont';
  src: url('./assets/fonts/Lato/Lato-Black.ttf'); 
  src: url('./assets/fonts/Lato/Lato-Bold.ttf') format(truetype), 
       url('./assets/fonts/Lato/Lato-Italic.ttf') format('truetype'), 
       url('./assets/fonts/Lato/Lato-Light.ttf') format('truetype'),
       url('./assets/fonts/Lato/Lato-Regular.ttf')  format('truetype'),
       url('./assets/fonts/Lato/Lato-Thin.ttf') format('truetype');
}

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
