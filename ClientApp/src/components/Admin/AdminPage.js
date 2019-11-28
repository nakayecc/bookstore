import React, { Component } from 'react';
import { Container } from 'reactstrap';


export class AdminPage extends Component {
    static displayName = AdminPage.name;

    render () {
        return (
            <div>
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
