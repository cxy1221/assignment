import React, { Component } from 'react';
import '../../stylesheets/Book.css'
import Book from "./Book"
class Literature extends Component{
    render(){
        return (
            <section className="literature">
                <Book />
            </section>
        )
    }
}


export default Literature