import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import GlobalStyles from '../src/global-styles'


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
