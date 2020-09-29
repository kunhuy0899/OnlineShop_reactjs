import React from 'react'
import './Footer.css'
import footerstore1 from './img/footerstore1.png';
import footerstore2 from './img/footerstore2.png';
function Footer() {
    return (
        <div>
            {/*==== FOOTER ====*/}
            <footer className="footer section">
                    <div className="footer__container bd-grid">
                        <div className="footer__box">
                        <h3 className="footer__title">KUN</h3>
                        <p className="footer__deal">Products store</p>
                        <a href="#"><img src={footerstore1} alt="" className="footer__store" /></a>
                        <a href="#"><img src={footerstore2} alt="" className="footer__store" /></a>
                        </div>
                        <div className="footer__box">
                        <h3 className="footer__title">EXPLORE</h3>
                        <ul>
                            <li><a href="#" className="footer__link">Home</a></li>
                            <li><a href="#" className="footer__link">Featured</a></li>
                            <li><a href="#" className="footer__link">New</a></li>
                            <li><a href="#" className="footer__link">Suscribe</a></li>
                        </ul>
                        </div>
                        <div className="footer__box">
                        <h3 className="footer__title">OUR SERVICES</h3>
                        <ul>
                            <li><a href="#" className="footer__link">Pricing</a></li>
                            <li><a href="#" className="footer__link">Free Shipping</a></li>
                            <li><a href="#" className="footer__link">Gift Cards</a></li>
                        </ul>
                        </div>
                        <div className="footer__box">
                        <h3 className="footer__title">FOLLOW</h3>
                        <a href="#" className="footer__social"><i className="bx bxl-facebook-square" /></a>
                        <a href="#" className="footer__social"><i className="bx bxl-instagram-alt" /></a>
                        <a href="#" className="footer__social"><i className="bx bxl-twitter" /></a>
                        </div>
                    </div>
                    <p className="footer__copy">©2020 copyright all right reserved</p>
                </footer>
        </div>
    )
}

export default Footer
