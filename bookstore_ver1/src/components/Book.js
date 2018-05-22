import React, { Component } from 'react';
const cartUrl_b1=require("../../images/b1.jpg");
class Book extends Component{

    render(){

        return (

                    <div className="book">
                        <div className="book_item">
                            <li title=" 苦难辉煌（全新修订增补版）" className="book_pic literary_pic">
                                <img src={cartUrl_b1} alt=" 苦难辉煌（全新修订增补版）"/>
                            </li>
                            <div className="book_content">
                                <li className="book_title">苦难辉煌</li>
                                <p><span className="book_price">¥68.00</span> <span className="author">金一南</span></p>
                                <button className="buy_btn">加入购物车</button>
                            </div>
                        </div>
                    </div>


        )
    }
}


export default Book