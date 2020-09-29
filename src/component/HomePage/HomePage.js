import React, { Component,useState } from 'react';
import './HomePage.css';
import offer from './img/offer.jpg';
import new1 from './img/new1.png';
import new2 from './img/new2.png';
import new3 from './img/new3.png';
import new4 from './img/new4.png';
import new5 from './img/new5.png';
import new6 from './img/new6.png';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.png';
import home from './img/home.png';
import backpackMan from './img/backpackMan.png';
import backpackWoman from './img/backpackWoman.png';
import Footer from '../Footer/Footer';




function HomePage() {
    const [products]=useState([
        {
            name:'Headphone One Black',
            const:'$29',
            image:require('./img/feature1.png')
        },
        {
            name:'Speaker Beats Pill',
            const:'$129',
            image:require('./img/feature2.png')
        }
        ,
        {
            name:'Apple Air Pods',
            const:'$129',
            image:require('./img/feature3.png')
        }
        ,
        {
            name:'Smartwatch F9 Negro',
            const:'$99',
            image:require('./img/feature4.png')
        }
    ])
    return (
        <main className="l-main">
                {/*====HOME====*/}
                <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__data">
                    <h1 className="home__title">MEW <br /><span>ARRIVALS</span></h1>
                    <a href="#featured" className="button">GO SHOPPING</a>
                    </div>
                    <img src={home} className="home__img" />
                </div>
                </section>
                {/*====COLLECTION====*/}
                <section className="collection section">
                <div className="collection__container bd-grid">
                    <div className="collection__box">
                    <img src={backpackMan} alt="" className="collection__img" />
                    <div className="collection__data">
                        <h2 className="collection__title"><span className="collection__subtitle">Men</span><br />Backpack</h2>
                        <a href="#" className="collection__view">View collection</a>
                    </div>
                    </div>
                    <div className="collection__box">
                    <div className="collection__data">
                        <h2 className="collection__title"><span className="collection__subtitle">Women</span><br />Backpack</h2>
                        <a href="#" className="collection__view">View collection</a>
                    </div>
                    <img src={backpackWoman} alt="" className="collection__img" />
                    </div>
                </div>
                </section>
                {/*====FEATURED====*/}
                <section className="featured section" id="featured">
                <h2 className="section-title">FEATURED PRODUCTS</h2>
                <a href="#" className="section-all">View All</a>
                <div className="featured__container bd-grid">
                    
                    {
                        products.map((product)=>(
                            <div className="featured__product">
                                <div className="featured__box">
                                    <div className="featured__new">NEW</div>
                                    <img src={product.image} alt="" className="featured__img" />
                                    <div className="new__link">
                                        <a href="#" className="button">ADD to Card</a>
                                    </div>
                                </div>
                                <div className="featured__data">
                                    <h3 className="featured__name">{product.name}</h3>
                                    <span className="featured__preci">{product.const}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </section>
                {/*====OFFER====*/}
                <section className="offer section">
                <div className="offer__bg">
                    <div className="offer__data">
                    <h2 className="offer__title">Special Offer</h2>
                    <p className="offer__description">Special offerts discounts for women this week only</p>
                    <a href="#" className="button">SHOP NOW</a>
                    </div>
                </div>
                </section>
                {/*====NEW ARRIVALS====*/}
                <section className="new section" id="new">
                <h2 className="section-title">NEW ARRIVALS</h2>
                <a href="#" className="section-all">View All</a>
                <div className="new__container bd-grid">
                    <div className="new__box">
                    <img src={new1} alt="" className="new__img" />
                    <div className="new__link">
                        <a href="#" className="button">VIEW PRODUCT</a>
                    </div>
                    </div>
                    <div className="new__box">
                    <img src={new2} alt="" className="new__img" />
                    <div className="new__link">
                        <a href="#" className="button">VIEW PRODUCT</a>
                    </div>
                    </div>
                    <div className="new__box">
                    <img src={new3} alt="" className="new__img" />
                    <div className="new__link">
                        <a href="#" className="button">VIEW PRODUCT</a>
                    </div>
                    </div>
                    <div className="new__box">
                    <img src={new4} alt="" className="new__img" />
                    <div className="new__link">
                        <a href="#" className="button">VIEW PRODUCT</a>
                    </div>
                    </div>
                    <div className="new__box">
                    <img src={new5} alt="" className="new__img" />
                    <div className="new__link">
                        <a href="#" className="button">VIEW PRODUCT</a>
                    </div>
                    </div>
                    <div className="new__box">
                    <img src={new6} alt="" className="new__img" />
                    <div className="new__link">
                        <a href="#" className="button">VIEW PRODUCT</a>
                    </div>
                    </div>
                </div>
                </section>
                {/*====NEW SLETTER====*/}
                <section className="newsletter section" id="suscribed">
                <div className="newsletter__container bd-grid">
                    <div className="newsletter__suscribe">
                    <h2 className="section-title">OUR NEWSLETTER</h2>
                    <p className="newsletter_description">Promotion new products and sales.Directly to your.</p>
                    <form action className="newsletter__form">
                        <input className="newsletter__input" type="text" placeholder="Enter Email" />
                        <a href="#" className="button">SUSCRIBE</a>
                    </form>
                    </div>
                </div>
                </section>
                {/*==== SPONSPRS ====*/}
                <section className="sponsors section">
                <div className="sponsors__container bd-grid">
                    <div className="sponsors__logo">
                    <img src={logo1} alt="" />
                    </div>
                    <div className="sponsors__logo">
                    <img src={logo2} alt="" />
                    </div>
                    <div className="sponsors__logo">
                    <img src={logo3} alt="" />
                    </div>
                    <div className="sponsors__logo">
                    <img src={logo4} alt="" />
                    </div>
                </div>
                </section>
                {/*==== FOOTER ====*/}
                <Footer></Footer>
                    
        </main>
    )
}

export default HomePage








