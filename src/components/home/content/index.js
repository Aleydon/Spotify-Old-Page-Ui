import React  from 'react';

import ResourcesComponent from '../resourses';
import imageone from '../../../assets/img/img1.jpg';
import imagetwo from '../../../assets/img/img2.jpg';
import imagethree from '../../../assets/img/img3.jpg';
import imagefor from '../../../assets/img/img4.jpg';
import './style.css';



const ContentHome = () => {
    return(
        <>
            <section id="wrap">
                <div className="area">
                    <div className="row">

                        {/* Albuns spotify */}
                        <div className="col-md-6">
                        <div className="row albuns">

                            <div className="col-md-6">
                                <img src={imageone} alt="image1" className="img-responsive img-cursor" />
                                {/* <h3>huehue</h3> */}
                                <img src={imagethree} alt="image2" className="img-responsive img-cursor" /> 
                                {/* <h3>Fiu Fiu</h3> */}
                            </div>

                            <div className="col-md-6">
                                <img src={imagetwo} alt="image3" className="img-responsive img-cursor" />
                                {/* <h3>nyaanyaa</h3> */}
                                <img src={imagefor} alt="image4" className="img-responsive img-cursor" /> 
                                {/* <h3>Come on</h3> */}
                            </div>
                        </div>
                        </div>


                        <div className="col-md-6">
                            <h1 className="title purple-text">O que o spotify tem?</h1>

                            <h2 className="sub-titles">Musicas</h2>
                            <p>O Spotify tem milhoes de musicas. Escute seus sons favoritos, descubra novas musicas e reuna seus favoritos em um so lugar.</p>

                            <h2 className="sub-titles">Playlists</h2>
                            <p>No Spotify voce encontra uma playlist para cada momento. Todas por fanaticos e especialistas da musica.</p>
                            
                            <h2 className="sub-titles">Novos Lancamentos</h2>
                            <p>Escute os novos lancamentos de sim=ngles e albuns da semana e veja o que esta bombando no Top 50.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ResourcesComponent />
        </>
    );
}


export default ContentHome;