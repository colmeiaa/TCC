import React from 'react';

import './styles.css';

import logoImg from '../../assets/images/Winter-Florest.svg';
import landingImg from '../../assets/images/mobile.svg';

import play from '../../assets/images/icons/google-play-badge.png';
import apple from '../../assets/images/icons/apple.png';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoImg} alt="Logo" />
                    <h2>Plataforma para Acampamento</h2>
                </div>
                
                <img
                    src={landingImg}
                    alt="Plataforma "
                    className="hero-image"
                />
                <div>
                    <div className="buttons-container">
                        <a href="" className="about">
                            About
                        </a>
                        <a href="" className="manual">
                            Guia
                        </a>
                    </div>
                    
                    <h2> Baixe Nosso App</h2>
                    <div className="buttons-app-container">
                        
                        <img src={play} alt="play"/>
                        
                        <img src={apple} alt="apple"/>
                        
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Landing;