import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../stylesheets/Login.css'
class Login extends Component {
    render() {
        return(
            <section className="login">
                <h3 className="login-title">SignIn</h3>
                <div className="widget-shadow">
                    <h4 className="login-top">Welcome back to chen's Bookstore! <br/> Not a Member? <Link to="/register">
                        Register Now »</Link></h4>
                    <div className="login-body">
                        <form>
                            <input type="text" className="user" name="email" placeholder="Enter your email" required=""/>
                            <input type="password" name="password" className="lock" placeholder="Password"/>
                            <input type="submit" name="Sign In" value="Sign In"/>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default Login