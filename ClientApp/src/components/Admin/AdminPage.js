import React, { Component } from 'react';
import {Layout} from "./Layout";
import {Route} from "react-router";
import AddNewBook from "./AddNewBook";
import DeleteBooks from "./DeleteBooks";
import AdminHomePage from "./AdminHomePage";


export class AdminPage extends Component {
    render () {
        return (
            <Layout>
                <Route exact path='/admin' component={AdminHomePage} />
                <Route path='/admin/add' component={AddNewBook} />
                <Route path='/admin/delete' component={DeleteBooks} />
            </Layout>
        );
    }
}
