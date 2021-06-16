import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // PENDING STYLED COMPONENTS

  input {
    border: 1px solid #364156;
    color: #364156;
    padding: 0.5rem;
    width: 300px;
  }

  .no-issues {
    color: #364156;
    padding: 0.5rem;
  }

  .issues {
    border: 1px solid #364156;
    border-top-width: 0;
    list-style: none;
    margin-top: 0px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(300px + 1rem);
    max-width: 100%;
  }

  .issues li {
    padding: 0.5rem;
  }

  .issue-active,
  .issues li:hover {
    background-color: #364156;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }

  .issues li:not(:last-of-type) {
    border-bottom: 1px solid #364156;
  }
`;