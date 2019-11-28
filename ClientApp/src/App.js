import React, { Component } from 'react';
import {AdminPage} from "./components/Admin/AdminPage";
import {UserLayout} from "./components/UserPage/UserLayout";
import './css/custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {

      const isAdmin = true;
    return (
        isAdmin ? <AdminPage/> : <UserLayout/>
    );
  }
}
