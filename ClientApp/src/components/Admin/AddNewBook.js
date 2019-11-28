import React, {Component} from "react";

class AddNewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isbn: "",
            title: "",
            date: "",
            author: "",
            price: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Podano następujące imię: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mx-auto">
                <div className="row text-center mt-5 addNewBook">
                    <div className="col-lg-6 mt-3 p-2">
                        <p> ISBN:</p>
                        <input type="number" value={this.state.isbn} onChange={this.handleChange}/>
                        <p>Title:</p>
                        <input type="text" value={this.state.title} onChange={this.handleChange}/>
                        <p>Relase Date:</p>
                        <input type="date" value={this.state.date} onChange={this.handleChange}/>
                        <p>Author:</p>
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <p>Price:</p>
                        <input type="number" value={this.state.price} onChange={this.handleChange}/>
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