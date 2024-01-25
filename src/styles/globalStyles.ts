import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '../theme/Theme.types';

export default createGlobalStyle<{ theme: ThemeType }>`

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.base};
  }
  html {
    height: 100%;
    -ms-overflow-style: scrollbar;
  }
  body {
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.dark};
    height: 100%;
  }
  b,
  input ,
  select {
    appearance: none;
  }
  ul {
    list-style: none;
  }
  #app, #root { /* stylelint-disable-line */
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #D4DCDF;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  .row-block > * {
    margin-bottom: 15px;
    margin-right: 15px;
  }
`;
