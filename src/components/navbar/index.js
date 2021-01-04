import React from 'react';

import { Link } from 'react-router-dom';

import spotify from '../../assets/img/spotify.svg';
import './style.css';



const NavBarComponent = () => {
    return(
        <>
            <nav className="navbar  navbar-inverse nav-bar-fixed-top navbar-expand-lg navbar-dark bg-dark img-header">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className="img-logo" src={spotify} alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarHeader" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navBarHeader">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/premium"  className="nav-link navigation">Premium</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="help" className="nav-link navigation">Ajuda</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="download" className="nav-link navigation">Baixar</Link>
                                </li>
                                <li className="diviser"></li>
                                <li className="nav-item">
                                    <Link to="subscribe" className="nav-link navigation" tabindex="-1" aria-disabled="true">Inscrever-se</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="login" className="nav-link navigation" tabindex="-1" aria-disabled="true">Entrar</Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    );
}


export default NavBarComponent;