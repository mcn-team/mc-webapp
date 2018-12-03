import React from 'react';

export class MCButton extends React.Component {
    render() {
        return (
            <div>
                <button { ...this.props }>{ this.props.children }</button>
            </div>
        );
    }
}
