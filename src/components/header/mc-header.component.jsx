import React from 'react';

import { styles } from './mc-header.style';

export class MCHeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <nav style={ styles.containerStyle } className="nav">
                <div className="nav-left">
                    <div style={ styles.titleContainer } className="nav-item" >
                        <img style={ styles.iconStyle } src="favicon.ico" alt="icon"/>
                        <span style={ styles.titleStyle } className="title" >
                            { this.props.children }
                        </span>
                    </div>
                </div>
            </nav>
        );
    }
}
