import React, { Component } from "react";
import Book from "./Book";


class BooksList extends Component {
    state = {
        bookList: []
    };

    constructor() {
        super();
        this.fetchBookData();
    }

    fetchBookData() {
        fetch("api/books")
            .then(response => { return response.json() })
            .then(data => { this.setState({ "bookList": data }); });

    }

    render() {

        return(
            this.state.bookList.map(book =>
                <Book
                    book={book}/>
            )
        );
    }
}

export default BooksList;