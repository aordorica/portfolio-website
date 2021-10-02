import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import ProjectItem from "../components/ProjectItem";
import PortfolioPage from "../components/PortfolioPage";
import { AnimatePresence } from "framer-motion";

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
                <Route path='/' component={HomePage} exact={true} />
                <Route
                    path='/portfolio'
                    component={PortfolioPage}
                    exact={true}
                />
                <Route path='/portfolio/:id' component={ProjectItem} />
                <Route path='/contact' component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </AnimatePresence>
    );
};

export default App;
