import React from 'react';

export class MCFormField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section style={{ marginTop: '20px' }}>
                <div style={{ display: 'inline-block' }}>
                    <label style={{ color: '#dddddd' }} className="label">{ this.props.children }</label>
                    <p className="control">
                        <input className="input" type={ this.props.type } />
                    </p>
                </div>
            </section>
        );
    }
}
