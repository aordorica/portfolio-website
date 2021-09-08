import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const PortfolioPage = () => (
  <div>
    <Header />
    <h1>My Work</h1>
    <p>Checkout the stuff I've done:</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
  </div>
);

export default PortfolioPage;
