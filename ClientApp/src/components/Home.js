import React, { Component } from 'react';
import Book from './Book';
import BooksList from "./BooksList";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="row mt-5 p-2">
        <BooksList/>
      </div>
    );
  }
}
