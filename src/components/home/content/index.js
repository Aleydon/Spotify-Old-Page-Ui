import React  from 'react';

import './style.css';
import imageone from '../../../assets/img/img1.jpg';
import imagetwo from '../../../assets/img/img2.jpg';
import imagethree from '../../../assets/img/img3.jpg';
import imagefor from '../../../assets/img/img4.jpg';



const ContentHome = () => {
    return(
        <section id="aff">
            <div className="area">
                <div className="row">

                    {/* Albuns spotify */}
                    <div className="col-md-6 borda">
                    <div className="row">

                        <div className="col-md-6">
                            <img src={imageone} alt="image1" className="img-responsive" />
                            <h3>huehue</h3>
                            <img src={imagethree} alt="image2" className="img-responsive" /> 
                        </div>

                        <div className="col-md-6">
                            <img src={imagetwo} alt="image3" className="img-responsive" />
                            <h3>nyaanyaa</h3>
                            <img src={imagefor} alt="image4" className="img-responsive" /> 
                        </div>
                    </div>
                    </div>


                    <div className="col-md-6 borda2">
                        <h2>O que o spotify tem?</h2>

                        <h3>Musica</h3>
                        <p>bla bla</p>

                        <h3>Musica</h3>
                        <p>bla bla</p>
                        
                        <h3>Musica</h3>
                        <p>bla bla</p>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default ContentHome;