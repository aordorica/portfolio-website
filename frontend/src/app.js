import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";

library.add(fab, faBars)

ReactDOM.render(<AppRouter />, document.getElementById('app'));