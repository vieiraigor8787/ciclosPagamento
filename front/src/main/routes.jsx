import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import AuthOrApp from './authOrApp';
import Dash from '../dashboard/dashboard';
// import Dashboard2 from '../dashboard2/dashboard2';
import Bill from '../billingCycle/billingCycle';

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dash} />
            <Route path='/billingCycles' component={Bill} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)
