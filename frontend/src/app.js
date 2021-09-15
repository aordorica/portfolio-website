import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme'
ReactDOM.render(<ThemeProvider theme={theme}><AppRouter /></ThemeProvider>, document.getElementById('app'));