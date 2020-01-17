import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// pages
import Home from '../pages/home';
import Resources from '../pages/resources';
import About from '../pages/about';
import Privacy from '../pages/privacy';
import TermsAndConditions from '../pages/termsandconditions';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resources' component={Resources} />
        <Route path='/about' component={About} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/termsandconditions' component={TermsAndConditions} />
        <Redirect path='*' to='/' />
    </Switch>
);