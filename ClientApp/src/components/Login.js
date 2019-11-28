import React, {Component} from 'react';
import {Container} from "reactstrap";





export default class Login extends Component {
    state = {
      username: "",
      password: ""
    };


    onChangeUsername = (event) => {
      this.setState({username: event.target.value})
    };
    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    };

    handleSubmit = (event) => {

    };

    render() {
        console.log(this);
        return (
            <Container>
                <form onSubmit={this.handleSubmit} className="mx-auto">
                    <div className="row">
                        <div className="col-lg-12 mx-auto text-center mt-5">
                            <div className="mx-auto loginBox p-3">
                                <p>Login</p>
                                <input type="text" value={this.state.username} onChange={this.onChangeUsername}/>
                                <p>Password</p>
                                <input type="password" value={this.state.password} onChange={this.onChangePassword}/>
                                <div>
                                    <button type="submit" className="btn-primary mt-4">Login!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>

        );
    }
}
