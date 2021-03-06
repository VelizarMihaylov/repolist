import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider } from '@apollo/client';
import { client } from 'gql-client';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import GlobalStyles from 'global-styles';
import ErrorBoundary from 'error-boundary';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </ApolloProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
