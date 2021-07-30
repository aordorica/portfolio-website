import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import Contact from "../components/Contact"
import HomePage from "../components/HomePage"
import Portfolio from "../components/Portfolio"
import PortfolioItemPage from "../components/PortfolioItemPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact={true} component={HomePage} />
                <Route path='/portfolio' exact={true} component={Portfolio} />
                <Route path='/portfolio/:id' component={PortfolioItemPage} />
                <Route path='/contact' component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;