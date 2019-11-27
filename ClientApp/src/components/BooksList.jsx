import React, { Component } from "react";
import Book from "./Book";


class BooksList extends Component {
    state = {
        book: [
            {
                id: 1,
                price: 350,
                title: "Wladca Pierscieni"
            },
            {
                id: 2,
                price: 450,
                title: "Harry potter"
            },
            {
                id: 3,
                price: 150,
                title: "Wiedzmin"
            },
            {
                id: 4,
                price: 150,
                title: "Wiedzmin"
            },
            {
                id: 3,
                price: 150,
                title: "Wiedzmin"
            },
            {
                id: 3,
                price: 150,
                title: "Wiedzmin"
            },
            {
                id: 3,
                price: 150,
                title: "Wiedzmin"
            },
            {
                id: 3,
                price: 150,
                title: "Wiedzmin"
            }
        ],
        book2: []

    };

    constructor() {
        super();
        this.fetchBookData();
    }

    fetchBookData() {
        fetch('api/books')
            .then(response => { return response.json(); })
            .then(responseData => {
                console.log(responseData);
                return responseData;
            })
            .then(data => { this.setState({ "book2": data }); });

    }

    render() {

        return(
            this.state.book.map(book =>
                <Book
                    book={book}/>
            )
        );
    }
}

export default BooksList;