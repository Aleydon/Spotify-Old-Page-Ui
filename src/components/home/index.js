import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';



const HomeComponent = () => {
    return(
        <div className="home-cover">
            <div className="text-cover">
                <h1 className="text">Musica para Todos</h1>
                <Link className="btn btn-light btn-lg">Aproveite o Spotify Free</Link>
                <Link className="btn btn-warning btn-lg">Obter spotify premium</Link>
            </div>
        </div>
    );
}


export default HomeComponent;