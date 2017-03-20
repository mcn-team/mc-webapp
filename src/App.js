import React, { Component } from 'react';
import { Link } from 'react-router';

import { MCHeaderComponent } from './components/header/mc-header.component';

class App extends Component {
    render() {
        return (
            <section>
                <MCHeaderComponent>Media Collection</MCHeaderComponent>
                <Link to="/test">Test</Link>
                { this.props.children }
            </section>
        );
    }
}

export default App;
