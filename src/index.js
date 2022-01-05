import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Header from './components/Header'

const theme = createTheme({
  palette: {
    primary: {
      main: '#a182a5'
    },
    secondary: {
      main: '#DC143C'
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <App /> 
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


