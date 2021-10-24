import { createGlobalStyle } from 'styled-components';
import normalize from './@normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    color: ${({ theme }) => theme.colours.darkToneInk};
    font-family: ${({ theme }): string => theme.typography.fontFamily};

    @media screen and (max-width: 374px) {
        font-size: 80%;
    }
  }
  body {
      background-color: ${({ theme }) => theme.colours.whiteSolid};
    * {
      margin: 0;
      padding: 0;
    }
  }

  h1 {
    font-size: ${({ theme }): string => theme.pxToRem(42)};
    margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
  }

  h2 {
    font-size: ${({ theme }): string => theme.pxToRem(38)};
    margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
  }

  h3 {
    font-size: ${({ theme }): string => theme.pxToRem(34)};
    margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
  }

  h4 {
    font-size: ${({ theme }): string => theme.pxToRem(28)};
    margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
  }

  h5 {
    font-size: ${({ theme }): string => theme.pxToRem(24)};
    margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
  }

  p {
    font-size: ${({ theme }): string => theme.pxToRem(16)};
    line-height: ${({ theme }): string => theme.pxToRem(24)};
    margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
    & .bold {
      font-weight: 700;
    }
    & .small-text {
      font-size: ${({ theme }): string => theme.pxToRem(14)};
      margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
    }
    & .side-note {
      font-size: ${({ theme }): string => theme.pxToRem(12)};
      margin-bottom: ${({ theme }): string => theme.pxToRem(24)};
    }
  }
`;

export default GlobalStyles;
