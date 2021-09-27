import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../Components/NotFoundPage';
import HomePage from '../Components/HomePage';
import ContactPage from '../Components/ContactPage';
import ProjectItem from '../Components/ProjectItem';
import PortfolioPage from '../Components/PortfolioPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className='app-contain'>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={ProjectItem} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
