import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../stylesheets/Login.css'
class Register extends Component {
    render() {
        return(
            <section className="register">
                <h3 className="login-title">Register</h3>
                <div className="widget-shadow">
                    <h4 className="login-top">Already have an Account ?<Link to="/login"> Sign In »</Link></h4>
                    <div class="login-body">
                        <input type="text" placeholder="First Name" required=""/>
                        <input type="text" placeholder="Last Name" required=""/>
                        <input type="text" class="email" placeholder="Email Address" required=""/>
                        <input type="password" name="password" class="lock" placeholder="Password"/>
                        <input type="submit" name="Register" value="Register"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Register