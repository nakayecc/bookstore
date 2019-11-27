import React, {Component} from "react";


class Book extends Component {
    render() {
        //todo obrazek jako background
        const obrazek = require(`../img/${this.props.book.id}.jpg`);
        // style = { {backgroundImage: "url("+obrazek+")" }}

        return (
            <div className="col-lg-3 mt-3">
                <div className="bookBox rounded border">
                    <div className="imgBook align-items-center text-center">
                        <img src={obrazek} data-toggle="modal" data-target="#exampleModalCenter"/>
                    </div>
                    <div className="text-center">
                        <p>{this.props.book.title}</p>
                        <p className="mb-0">{this.props.book.price}</p>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div id="rozwijanie">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="">information</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <a data-toggle="collapse" href="#description"
                                       aria-expanded="false"
                                       aria-controls="description"
                                       id="heading-example">
                                        <div className="modal-header">
                                            <p>Description</p>
                                        </div>
                                    </a>
                                    <div id="description" className="collapse hide"
                                         aria-labelledby="heading-example"
                                         data-parent="#rozwijanie">
                                        <div className="modal-body">
                                            dfgdfg opis opis opis opis opis

                                        </div>
                                    </div>
                                    <a data-toggle="collapse" href="#income"
                                       aria-expanded="false"
                                       aria-controls="income"
                                       id="heading-example">
                                        <div className="modal-header">
                                            <p>Income per Hour</p>
                                        </div>
                                    </a>
                                    <div id="income" className="collapse hide"
                                         aria-labelledby="heading-example"
                                         data-parent="#rozwijanie">
                                        <div className="modal-body">
                                            <p>production per hour: <span> +</span>
                                            </p>
                                            <p>after level update bonus income: <span>l</span>
                                                <span> + </span>
                                            </p>

                                            <p>energy consumption: -789 </p>
                                            <p>after level update new consumption -189</p>
                                        </div>
                                    </div>

                                    <a data-toggle="collapse" href="#requirements"
                                       aria-expanded="false"
                                       aria-controls="requirements{$building->getId()}"
                                       id="heading-example">
                                        <div class="modal-header">
                                            <p>Requirements</p>
                                        </div>
                                    </a>
                                    <div id="requirements" class="collapse hide" aria-labelledby="heading-example"
                                         data-parent="#rozwijanie">
                                        <div class="modal-body">

                                            <p>fdgfg</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;