import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from '../pages/Login';
import Consultations from '../pages/Consultations';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/consultas" component={Consultations} />
            </Switch>
        </Router>
    );
};

export default Routes;