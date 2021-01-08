import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import instagram from '../../assets/img/instagram.png';
import './style.css';





const FooterComponent = () => {
    return(
        <footer id="footer-component">
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} alt="logo" className="logo"/>
                    </div>
                    <div className="col-md-2 list">
                        <h4>Company</h4>
                            <ul className="nav">
                                <li><Link to="/">Sobre</Link></li>
                                <li><Link to="/">Empregos</Link></li>
                                <li><Link to="/">Imprensa</Link></li>
                                <li><Link to="/">Novidades</Link></li>
                            </ul>
                    </div>
                    <div className="col-md-2 list">
                        <h4>Comunidades</h4>
                            <ul className="nav">
                                <li><Link to="/">Artistas</Link></li>
                                <li><Link to="/">Desenvolvedores</Link></li>
                                <li><Link to="/">Marcas</Link></li>
                                <li><Link to="/">Player da web </Link></li>
                            </ul>
                    </div>
                    <div className="col-md-2 list">
                        <h4>Links Uteis</h4>
                            <ul className="nav">
                                <li><Link to="/">Sobre</Link></li>
                                <li><Link to="/">Empregos</Link></li>
                                <li><Link to="/">Imprensa</Link></li>
                                <li><Link to="/">Novidades</Link></li>
                            </ul>
                    </div>
                </div>

                <div className="col-md-4">
                    <ul className="nav">
                        <li><Link to="/"><img className="image-social" src={facebook} alt="facebook"/></Link></li>
                        <li><Link to="/"><img className="image-social" src={twitter} alt="twitter"/></Link></li>
                        <li><Link to="/"><img className="image-social" src={instagram} alt="instagram"/></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}


export default FooterComponent;