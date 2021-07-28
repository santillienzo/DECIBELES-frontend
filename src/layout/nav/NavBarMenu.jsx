import React, {  useState } from 'react';
import {isAuthenticate} from '../../Javascript/apiCore'

import './NavBarMenu.css'

import {
    Link as LinkScroll 
} from 'react-scroll'
import {
    Route,
    Switch,
    Link as LinkRecharge 
} from 'react-router-dom'
import logo from '../../assets/logo/logo.png';
import tipografia from '../../assets/logo/tipografia.png';

const NavBarMenu = () => {
    const user = isAuthenticate().user;


    const renderIcon = () =>{
        if (isAuthenticate()) {
            return (
                <li className="nav-icon">
                    <LinkRecharge to={`/account/profile/${user._id}`} className="nav-link non-selectable"><i className="far fa-user"></i></LinkRecharge>
                </li>
            )
        }else{
            return(
                <li className="nav-icon">
                    <LinkRecharge to="/account/login" className="nav-link non-selectable"><i className="fas fa-sign-in-alt"></i></LinkRecharge>
                </li>
            )
        }
    }



    return (
        <nav className="navbar-container" id="navbar">
            <div className="navbar-container-img"><img src={logo} alt="" /><img src={tipografia} alt="" /></div>
            <Switch>
                <Route path="/" exact>
                    <ul>
                        <li className="li-input">
                            <form action="">
                                <input type="text" placeholder="Buscar..."/>
                                <i className="fas fa-search"></i>
                            </form>
                        </li>
                        <li className="nav-item">
                            <LinkScroll to="inicio" className="nav-link non-selectable" smooth={true} duration={5}>Inicio</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkRecharge to="/products/all" className="nav-link non-selectable">Productos</LinkRecharge>
                        </li>
                        <li className="nav-item">
                            <LinkScroll to="servicios" className="nav-link non-selectable" smooth={true} duration={5}>Servicios</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkRecharge to="/about" className="nav-link non-selectable">Nosotros</LinkRecharge>
                        </li>
                        <li className="nav-item">
                            <LinkScroll to="contacto" className="nav-link non-selectable" smooth={true} duration={5}>Contacto</LinkScroll>
                        </li>
                        {renderIcon()}
                        <li className="nav-icon">
                            <LinkRecharge to="/cart" className="nav-link non-selectable"><i className="fas fa-shopping-cart"></i></LinkRecharge>
                        </li>
                    </ul>
                </Route>
                <Route path="/">
                    <ul>
                        <li className="li-input">
                            <form action="">
                                <input type="text" placeholder="Buscar..."/>
                                <i className="fas fa-search"></i>
                            </form>
                        </li>
                        <li className="nav-item">
                            <LinkRecharge to="" className="nav-link non-selectable" smooth={true} duration={5}>Inicio</LinkRecharge>
                        </li>
                        <li className="nav-item">
                            <LinkRecharge to="/products/all" className="nav-link non-selectable">Productos</LinkRecharge>
                        </li>
                        <li className="nav-item">
                            <LinkRecharge to="/service" className="nav-link non-selectable" smooth={true} duration={5}>Servicios</LinkRecharge>
                        </li>
                        <li className="nav-item">
                            <LinkRecharge to="/about" className="nav-link non-selectable" smooth={true} duration={5}>Nosotros</LinkRecharge>
                        </li>
                        <li className="nav-item">
                            <LinkRecharge to="/contact" className="nav-link non-selectable" smooth={true} duration={5}>Contacto</LinkRecharge>
                        </li>
                        {renderIcon()}
                        <li className="nav-icon">
                            <LinkRecharge to="/cart" className="nav-link non-selectable"><i className="fas fa-shopping-cart"></i></LinkRecharge>
                        </li>
                    </ul>
                </Route>
            </Switch>
        </nav>
    );
};

export default NavBarMenu;