import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Literature from "./components/Literature";
window.React = React;

render(
    <Router>
        <div className="main">
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/literature" component={Literature}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
);




