import React from 'react';

import { MCFormField } from '../../components/forms/mc-form-field.compoment';
import { MCButton } from '../common/mc-button.component';

const styles = {
    buttonStyle: {
        border: '1px solid #000',
        color: '#fff'
    },
    formFieldContainerStyle: { marginBottom: '30px' }
};

export class MCLoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin()  {
        const payload = {
            username: this.refs.username.state.value,
            password: this.refs.password.state.value
        };
        console.log(payload);
        fetch('http://dev.kaze-d.fr/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then((response) => {
            return response.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
        });
    }

    render() {
        return (
            <form>
                <MCFormField containerStyle={ styles.formFieldContainerStyle } ref="username" type="text">Login</MCFormField>
                <MCFormField containerStyle={ styles.formFieldContainerStyle } ref="password" type="password">Password</MCFormField>
                <MCButton style={ styles.buttonStyle } className="linear-gray button" onClick={ this.onLogin }>Sign in</MCButton>
            </form>
        );
    }
}
