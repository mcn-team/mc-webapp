import React from 'react';

import { MCLoginForm } from '../../components/forms/mc-login-form.component';
import { styles } from './login-page.styles';

export class LoginPageComponent extends React.Component {
    render() {
        return (
            <section style={ styles.pageContainerStyle }>
                <div style={ styles.boxContainer }>
                    <MCLoginForm />
                </div>
            </section>
        );
    }
}
