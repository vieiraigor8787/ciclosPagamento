import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';

import AuthOrApp from './authOrApp';
import Dash from '../dashboard/dashboard';
// import Dashboard2 from '../dashboard2/dashboard2';
import Bill from '../billingCycle/billingCycle';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dash} />
            <Route path='billingCycles' component={Bill} />
        </Route>
        <Redirect from='*' to='/' exact/>
    </Router>
)
