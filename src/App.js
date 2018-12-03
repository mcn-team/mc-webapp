import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { MCHeaderComponent } from './components/header/mc-header.component';
import { LoginPageComponent } from "./pages/login/login-page.component";
import { TestWithRouter as Test } from './components/test/test.component';
import { withLoginFallback } from "./hoc/with-login-fallback.hoc";

class App extends Component {
    render() {
        return (
            <section>
                <MCHeaderComponent>Media Collection</MCHeaderComponent>
                <Link to="/test">Test</Link>
                <Link to="/Login">Login</Link>
                <Switch>
                    <Route path="/test" component={ withLoginFallback(Test) }/>
                    <Route path="/login" component={ LoginPageComponent } />
                    <Route component={ withLoginFallback(Test) }/>
                </Switch>
            </section>
        );
    }
}

export default App;
