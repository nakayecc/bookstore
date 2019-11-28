import React, { Component } from 'react';
import { Route } from 'react-router';
import {Home} from "./Home";
import {Counter} from "./Counter";
import {Layout} from "./Layout";


export class UserLayout extends Component {
    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
            </Layout>
        );
    }
}
