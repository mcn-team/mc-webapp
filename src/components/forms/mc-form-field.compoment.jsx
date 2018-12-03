import React from 'react';

const styles = {
    inputStyleContainer: { display: 'inline-block' },
    labelStyle: { color: '#dddddd' }
};

export class MCFormField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <section style={ this.props.containerStyle }>
                <div style={ styles.inputStyleContainer }>
                    <label style={ styles.labelStyle } className="label">{ this.props.children }</label>
                    <p className="control">
                        <input className="input" type={ this.props.type } onChange={ this.onInputChange } />
                    </p>
                </div>
            </section>
        );
    }
}
