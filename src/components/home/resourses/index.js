import React from 'react';

import iphoneone from '../../../assets/img/iphone1.png';
import iphonetwo from '../../../assets/img/iphone2.png';
import './style.css';





const ResourcesComponent = () => {
  return(
    <section id="resources">
        <div>
            <div className="row">
                <div className="col-md-5">
                    <h2>Facil</h2>

                    <h3>Buscar</h3>
                    <p>ja sabe o que quer escutar? E so procurar e apertar o play.</p>

                    <h3>Navegar</h3>
                    <p>Veja os novos lancamentos, o que esta bombando nas paradas e as melhores playlists para o seu momento.</p>

                    <h3>Descobrir</h3>
                    <p>Curta musicas novas toda segunda-feira com uma playlist personalizada para voce. Ou relaxe uma das radios.</p>
                </div>

                  <div className="col-md-7">
                  <div className="row rotation-image">
                      <div className="col-md-6">
                          <img src={iphoneone} alt="iphone1" className="iphone-image" />
                      </div>
                      <div className="col-md-6">
                          <img src={iphonetwo} alt="iphone2" className="iphone-image"/>
                      </div>
                  </div>
                </div>
                
            </div>
        </div>
    </section>
  );
};


export default ResourcesComponent;