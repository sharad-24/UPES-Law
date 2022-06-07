import React, { useLayoutEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Home  from '../containers/Home';
import About from '../containers/About';
import Editors from '../containers/Editors';
import CallForPaper from '../containers/CallForPaper';

function Routes() {
    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/editors">
                <Editors />
            </Route>
            <Route exact path="/callForPaper">
                <CallForPaper />
            </Route>
        </Switch>
    );
}

export default Routes;