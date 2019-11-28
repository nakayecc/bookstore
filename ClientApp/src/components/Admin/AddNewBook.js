import React, {Component} from "react";

class AddNewBook extends Component {

    state = {
        isbn: "",
        title: "",
        date: "",
        author: "",
        price: ""
    };


    handleChangeIsbn = (event) => {
        this.setState({isbn: event.target.value});
    };
    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
    };
    handleChangeDate = (event) => {
        this.setState({date: event.target.value});
    };
    handleChangeAuthor = (event) => {
        this.setState({author: event.target.value});
    };
    handleChangePrice = (event) => {
        this.setState({price: event.target.value});
    };

    handleSubmit = (event) => {
        alert('Podano następujące imię: ' + this.state.value);
        event.preventDefault();
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mx-auto">
                <div className="row text-center mt-5 addNewBook">
                    <div className="col-lg-6 mt-3 p-2">
                        <p> ISBN:</p>
                        <input type="number" value={this.state.isbn} onChange={this.handleChangeIsbn}/>
                        <p>Title:</p>
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
                        <p>Relase Date:</p>
                        <input type="date" value={this.state.date} onChange={this.handleChangeDate}/>
                        <p>Author:</p>
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <p>Price:</p>
                        <input type="number" value={this.state.price} onChange={this.handleChangePrice}/>
                    </div>

                    <div className="col-lg-6 mt-3 p-2">
                        <input type="file" name="pic" accept="image/*"/>
                    </div>
                    <div className="col-lg-12 mt-5 mb-5">
                        <button type="submit" className="btn-primary">Add</button>
                    </div>
                </div>
            </form>

        )
    }

}

export default AddNewBook;