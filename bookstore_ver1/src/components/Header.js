import React, { Component } from 'react';
import '../../stylesheets/Header.css'
import {Link} from 'react-router-dom'
const cartUrl=require("../../images/cart-icon.png");
class Header extends Component {
    render() {
        return(
            <section className="header">
                <div className="top_header">
                    <div className="welcome">
                        <p>Welcome to chen's Bookstore <Link to="/register">Register </Link> Or <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
                <div className="store_title">
                    <div className="logo">
                        <h1><Link to="/home">chen's <b>Bookstore</b><span className="tag">Simple Bookstore example</span>
                        </Link></h1>
                    </div>
                    <div className="search-box">
                        <form>
                            <input type="text" id="bookSearch" placeholder="Search" required="true"/>
                            <input type="submit" value=" "/>
                        </form>
                    </div>
                    <div className="simple_cart">
                        <span className="shopping_cart"><a href="#"><img src={cartUrl}/></a></span>
                        <h4 className="paid"><a href="#">
                            <span className="simpleCart_total"> ¥0.00 </span> (<span id="simpleCart_quantity"
                                                                                     className="simpleCart_quantity"> 0 </span>)
                        </a></h4>
                        <div className="cart-box">
                            <p><a href="#" className="simpleCart_empty">Empty cart</a></p>
                        </div>
                    </div>
                </div>
                <div className="classification">
                    <div className="nav2">
                        <li><Link to="/home">主页</Link></li>
                        <li><Link to="/literature">文学</Link></li>
                        <li><a href="#">小说</a></li>
                        <li><a href="#">历史</a></li>
                        <li><a href="#">管理</a></li>
                        <li><a href="#">传记</a></li>
                    </div>
                </div>

            </section>
        )
    }
}
export default Header
