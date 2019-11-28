import React, {Component} from "react";

class AdminHomePage extends Component {

    render() {
        return (
            <div className="row mx-auto text-center mt-5 adminHome">
                <div className="col-lg-12 text-center mt-5">
                <h1>Welcome to admin page</h1>
                </div>
                <div className="col-lg-6 mt-5">
                    <p>Total books in base:</p>
                </div>
                <div className="col-lg-6 mt-5">
                    <p>50</p>
                </div>

            </div>

        )
    }

}

export default AdminHomePage;