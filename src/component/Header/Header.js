import React from 'react'
import './Header.css';

function Header() {
    
    return (
            <header className="l-header">
                    <nav className="nav bd-grid">
                    <div>
                        <a href="#" className="nav__logo" >KUN</a>
                    </div>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list"> 
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#featured" className="nav__link">Featured</a></li>
                        <li className="nav__item"><a href="#new" className="nav__link">New</a></li>
                        <li className="nav__item"><a href="#suscribed" className="nav__link">Suscribe
                            </a></li>
                        </ul>
                    </div>
                    <div>
                        <i className="bx bx-cart nav__cart" />
                        <i className="bx bx-menu nav__toggle" id="nav-toggle" />
                    </div>
                    </nav>
            </header>
            
    )
}

export default Header
