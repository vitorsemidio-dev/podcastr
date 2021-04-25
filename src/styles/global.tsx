/** @format */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;

    --gray-50: #f7f8fa;
    --gray-100: #e6e8eb;
    --gray-200: #afb2b1;
    --gray-500: #808080;
    --gray-800: #494d4b;

    --green-500: #04d361;

    --purple-300: #9f75ff;
    --purple-400: #9164fa;
    --purple-500: #8257e5;
    --purple-800: #6f48c9;

    --header-height: 6.5rem;
  }

  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Lexend'), url(/fonts/Lexend-Medium.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Lexend'), url(/fonts/Lexend-SemiBold.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Inter'), url(/fonts/Inter.ttf) format('truetype');
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--gray-50);
  }

  body, input, textarea, button {
    font: 500 1rem 'Inter', sans-serif;
    color: var(--gray-500);

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Lexend', sans-serif;
    color: var(--gray-800);
  }

  h1 {
    font-size: 2rem;

    @media (max-width: 1080px) {
      font-size: 1.8rem;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;

    @media (max-width: 1080px) {
      font-size: 1.4rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  button {
    cursor: pointer;
  }
`;
