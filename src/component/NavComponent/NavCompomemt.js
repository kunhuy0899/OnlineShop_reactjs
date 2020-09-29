import React , {Component} from 'react';
import { Button } from './Button';
import {MenuItems} from './MenuItems';
import './NavComponent.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Card from './Card';




class NavCompomemt extends Component{
    state = { clicked: false }
    handleClick=()=>{
        this.setState({
            clicked: !this.state.clicked
        })
    };
    
    render(){
        
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <Link to="/">KUN SHOP <i className='bx bxl-shopify bx-tada' style={{color: "#E55947"}}></i></Link>
                   
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'bx bx-window-close bx-tada' : 'bx bx-menu bx-tada '}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {
                        MenuItems.map((item,index)=>{
                            return (
                                    <li key={index}>
                                        <a className={item.cName}>
                                            <Link to={item.url}>{item.title}</Link>
                                        </a>
                                    </li>
                            )
                        })
                    } 
                    <Card></Card>
                    
                </ul>
                <Button><Link to="/signup">Sign Up</Link></Button>
            </nav>
        )
    }
}

export default NavCompomemt 