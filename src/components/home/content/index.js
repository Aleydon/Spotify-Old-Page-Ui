import React  from 'react';

import ResourcesComponent from '../resourses';
import FooterComponent from '../../footer';
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
                                <img src={imagethree} alt="image2" className="img-responsive img-cursor" /> 
                            </div>

                            <div className="col-md-6">
                                <img src={imagetwo} alt="image3" className="img-responsive img-cursor" />
                                <img src={imagefor} alt="image4" className="img-responsive img-cursor" /> 
                            </div>
                        </div>
                        </div>


                        <div className="col-md-6">
                            <h1 className="title purple-text">O que o spotify têm?</h1>

                            <h2 className="sub-titles">Músicas</h2>
                            <p>O Spotify têm milhões de músicas. Escute seus sons favoritos, descubra novas músicas e reúna seus favoritos em um so lugar.</p>

                            <h2 className="sub-titles">Playlists</h2>
                            <p>No Spotify você encontra uma playlist para cada momento. Todas por fanáticos e especialistas da música.</p>
                            
                            <h2 className="sub-titles">Novos Lançamentos</h2>
                            <p>Escute os novos lançamentos de singles e álbuns da semana e veja o que está bombando no Top 50.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ResourcesComponent />
            <FooterComponent />
        </>
    );
}


export default ContentHome;