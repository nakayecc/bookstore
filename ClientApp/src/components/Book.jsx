import React, {Component} from "react";



class Book extends Component{
    render() {

        let obrazek;

        try {
            obrazek = require(`../img/${this.props.book.id}.jpg`);
        } catch (e) {
            obrazek = require("../img/defaultBookImage.png");
        } 
        

        // style = { {backgroundImage: "url("+obrazek+")" }}


        return(
            <div className="col-lg-3 mt-3">
                <div className="bookBox rounded border">
                    <div className="imgBook align-items-center text-center">
                        <img src={obrazek}/>
                    </div>
                    <div className="text-center">
                        <p>{this.props.book.name}</p>
                        <p className="mb-0">{this.props.book.price} $</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default Book;