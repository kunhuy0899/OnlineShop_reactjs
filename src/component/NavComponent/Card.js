import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function Card() {
    
    return (
        <li>
            <a className="cName">
                <Link to="/cart">
                <i class='bx bx-cart bx-tada' ></i>
                    <span className="cart__number"></span>    
                </Link>
            </a>
        </li>
    )
}

export default Card
