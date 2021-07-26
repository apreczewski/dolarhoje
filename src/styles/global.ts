import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
// import background from '../assets/images/background-7.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }

`;
