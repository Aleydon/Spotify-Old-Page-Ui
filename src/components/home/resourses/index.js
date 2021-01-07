import React from 'react';

import './style.css';





const ResourcesComponent = () => {
  return(
    <section id="resources">
        <div>
            <div className="row">
                <div className="col-md-8 border2">
                    <h2>Facil</h2>

                    <h3>Buscar</h3>
                    <p>ja sabe o que quer escutar? E so procurar e apertar o play.</p>

                    <h3>Navegar</h3>
                    <p>Veja os novos lancamentos, o que esta bombando nas paradas e as melhores playlists para o seu momento.</p>

                    <h3>Descobrir</h3>
                    <p>Curta musicas novas toda segunda-feira com uma playlist personalizada para voce. Ou relaxe uma das radios.</p>
                </div>
                <div className="col-md-4 border1">
                  <p>Image</p>
                </div>
            </div>
        </div>
    </section>
  );
};


export default ResourcesComponent;