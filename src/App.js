import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <section>
                <h2>Media Collection</h2>
                <Link to="/test">Test</Link>
                { this.props.children }
            </section>
        );
    }
}

export default App;
