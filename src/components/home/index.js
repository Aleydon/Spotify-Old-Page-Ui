import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';
import ContentHome from './content';




const HomeComponent = () => {
    return(
        <>
            <div className="home-cover">
                <div className="text-cover">
                    <h1 className="text">Música para Todos</h1>
                    <Link className="btn btn-outline-light" to="/">Aproveite o Spotify Free</Link>
                    <Link className="btn btn-warning" to="/">Obter spotify premium</Link>
                </div>
            </div>
            <ContentHome/>
        </>
    );
}


export default HomeComponent;