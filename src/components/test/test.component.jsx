import React from 'react';
import { withRouter } from "react-router-dom";


class TestComponent extends React.Component {
    render() {
        return (
            <div>
                <h4>Page Test</h4>
                <p>This is a test</p>
            </div>
        );
    }
}

export const TestWithRouter = withRouter(TestComponent);
