import React from 'react';
import './Login.css';
import firestore from "../../config/Firebase";

class Login extends React.Component {

    render() {
        return ( 
            <div>
                <form>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Full name"
                />
                <button type="submit">Submit</button>
                </form>
            </div>
            )
    }
}

export default Login;