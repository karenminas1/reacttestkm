import React from 'react';
import firebase from "../../config/Firebase";

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
         email: "",
         password: ""
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
 
        db.collection("Users").add({
            email: this.state.email,
            password: this.state.password
        });  
        this.setState({
          fullname: "",
          email: ""
        });
    };

    render() {
        return ( 
            <div>
                <form onSubmit={this.addUser}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.updateInput}
                    value={this.state.email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.updateInput}
                    value={this.state.password}
                />
                <button type="submit">Submit</button>
                </form>
            </div>
            )
    }
}

export default SignIn;