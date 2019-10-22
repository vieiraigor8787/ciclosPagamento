import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dash from '../dashboard/dashboard';
// import Dashboard2 from '../dashboard2/dashboard2';

import Bill from '../billingCycle/billingCycle';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dash} />
        <Route path='/billingCycles' component={Bill} />
        <Redirect from='*' to='/' exact/>
    </Router>
)
