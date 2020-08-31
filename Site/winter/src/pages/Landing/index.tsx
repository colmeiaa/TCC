    import React from 'react';

import './styles.css';

import logoImg from '../../assets/images/Winter-Forest.svg';
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
                    <p>
                        <h4>Esse é o projeto de TCC</h4>
                        Paulo Vinicius -D3708H-9 & Gabriel Rodrigues - [RA]
                        <br />
                        Gabriel [RA] - Fabricio .[RA]
                        <br/>
                        Este Projeto visa criara um aplicativo para ajudar pessoas que viam acampar 
                        com uma parte offline aonde há um guia que irá ajudar a os inciantes ou não 
                        com as melhores escolhas de como sobreviver em diversos biomas , com dicas de como montar 
                        sua barra , há como ascender sua fogueira. Alem de dicas da comunidade.
                        Ee uma funcionalidade online onde voce poderá compartilhar experiencias , e formar um grupo 
                        com varias pessoas , para campar. Incluindp uma funcionalidade de divisão de atividades .
                        Venha participar 
                    </p>     
                </div>
                
                <img
                    src={landingImg}
                    alt="Plataforma "
                    className="hero-image"
                />
                <div>
                    <div className="buttons-container">
                        <a href="/about" className="about">
                            About
                        </a>

                        <a href="/Manual" className="manual">
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