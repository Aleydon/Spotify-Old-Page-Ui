import React from 'react';

import logo from '../../assets/img/logo.png';
import './style.css';



const FooterComponent = () => {
    return(
        <footer id="footer-component">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} alt="logo" className="logo"/>
                    </div>
                    <div className="col-md-2">
                        Menu1
                    </div>
                    <div className="col-md-2">
                        Menu2
                    </div>
                    <div className="col-md-2">
                        Menu3
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                            Redes Sociais
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default FooterComponent;