import React, {Component} from "react";

class DeleteBooks extends Component {




    render() {
        return (
            <div className="deleteBooks">
                <table className="table text-center p-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ISBN</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Harry</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>234</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>234</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>234</td>
                        <td>X</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        )
    }

}

export default DeleteBooks;