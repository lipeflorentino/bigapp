// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/client-content.scss';
// Importando img
import img from './img/cliente1.png';
import img2 from './img/cliente2.png';
import img3 from './img/cliente3.png';
// Importando o js
import './javascript/carousel-activate.js';
//importando componentes


//Content
const ClientContent = () => (
    <div>
        <div className="client-content content" id="toCliente">
            <div className="cc-titulo">
                <h2>Por quê fechar conosco?</h2>
                <div className="title-underline"></div>
                <div className="cc-carousel">
                    <h3>Depoimentos</h3>
                    <div id="slide1" className="cc-slide slide-activate">
                        <div className="cc-img">
                            <img src={img} title="" alt=""></img>
                        </div>
                        <div className="cc-text">
                            <h4><strong className="depo-icon">"</strong>O texto aqui é o depoimento de um outro cliente satisfeito, para aumentar o grau de confiabilidade da em,presa e atrair novos clientes.<strong className="depo-icon">"</strong></h4>
                            <p>Nome e Sobrenome - cargo</p>
                        </div>
                        <div id="btn-slide3"><i class="fa fa-chevron-circle-left"></i></div>
                        <div id="btn-slide2"><i class="fa fa-chevron-circle-right"></i></div>
                    </div>
                    <div id="slide2" className="cc-slide">
                        <div className="cc-img">
                            <img src={img2} title="" alt=""></img>
                        </div>
                        <div className="cc-text">
                            <h4><strong className="depo-icon">"</strong>Aqui entra um texto de depoimento de um cliente satisfeito, para aumentar o grau de confiabilidade da em,presa e atrair novos clientes.<strong className="depo-icon">"</strong></h4>
                            <p>Nome e Sobrenome - cargo</p>
                        </div>
                        <div id="btn-slide1"><i class="fa fa-chevron-circle-left"></i></div>
                        <div id="btn-slide6"><i class="fa fa-chevron-circle-right"></i></div>
                    </div>
                    <div id="slide3" className="cc-slide">
                        <div className="cc-img">
                            <img src={img3} title="" alt=""></img>
                        </div>
                        <div className="cc-text">
                            <h4><strong className="depo-icon">"</strong>Nesta parte entra o texto do cliente numero 3 o depoimento de um cliente satisfeito, para aumentar o grau de confiabilidade da em,presa e atrair novos clientes.<strong className="depo-icon">"</strong></h4>
                            <p>Nome e Sobrenome - cargo</p>
                        </div>
                        <div id="btn-slide5"><i class="fa fa-chevron-circle-left"></i></div>
                        <div id="btn-slide4"><i class="fa fa-chevron-circle-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
);

export default ClientContent;