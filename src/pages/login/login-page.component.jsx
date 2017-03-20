import React from 'react';

import { MCFormField } from '../../components/forms/mc-form-field.compoment';
import { styles } from './login-page.styles';

export class LoginPageComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section style={ styles.pageContainerStyle }>
                <div style={ styles.boxContainer }>
                    <form>
                        <MCFormField type="text">Login</MCFormField>
                        <MCFormField type="password">Password</MCFormField>
                    </form>
                </div>
            </section>
        );
    }
}
