import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// pages
import Home from '../pages/home';
import Resources from '../pages/resources';
import About from '../pages/about';
import Project from '../pages/project';
import Privacy from '../pages/privacy';
import TermsAndConditions from '../pages/termsandconditions';
import Contact from '../pages/contact';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resources' component={Resources} />
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/termsandconditions' component={TermsAndConditions} />
        <Route path='/contact' component={Contact} />
        <Redirect path='*' to='/' />
    </Switch>
);