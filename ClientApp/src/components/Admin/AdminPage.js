import React, { Component } from 'react';
import {Layout} from "./Layout";
import {Route} from "react-router";
import {Counter} from "../UserPage/Counter";
import AddNewBook from "./AddNewBook";


export class AdminPage extends Component {
    render () {
        return (
            <Layout>
                <Route exact path='/admin' component={AdminPage} />
                <Route path='/admin/add' component={AddNewBook} />
                <Route path='/admin/delete' component={Counter} />
            </Layout>
        );
    }
}
