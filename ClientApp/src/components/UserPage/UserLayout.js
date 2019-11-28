import React, { Component } from 'react';
import { Route } from 'react-router';
import {Home} from "./Home";
import {Counter} from "./Counter";
import {FetchData} from "./FetchData";
import {Layout} from "./Layout";


export class UserLayout extends Component {
    static displayName = UserLayout.name;

    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
        );
    }
}
