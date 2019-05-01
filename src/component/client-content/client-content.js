// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

// Importando css e scss
import './stylesheet/client-content.scss';
// Importando img
import img from './img/cliente1.jpg';
import img2 from './img/cliente2.jpg';
import img3 from './img/cliente3.jpg';
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
                    <div className="slide-holder">
                        <div id="slide1" className="cc-slide slide-activate">
                            <div className="cc-img">
                                <img src={img} title="marcia-lima-cliente" alt="um cliente satisfeito"></img>
                            </div>
                            <div className="cc-text">
                                <i className="fa fa-quote-left"></i>
                                <h4>Fiquei muito satisfeita com o serviço, o atendimento foi ótimo, sempre muito atenciosos e no final o resultado foi até melhor do que eu esperava. Nota 1000!!!</h4>
                                <i className="fa fa-quote-right"></i>
                                <p>Márcia Lima</p>
                            </div>
                            <div id="btn-slide3"><i className="fa fa-chevron-circle-left"></i></div>
                            <div id="btn-slide2"><i className="fa fa-chevron-circle-right"></i></div>
                        </div>
                        <div id="slide2" className="cc-slide">
                            <div className="cc-img">
                                <img src={img3} title="joao-fernandes-cliente" alt="outro cliente satisfeito"></img>
                            </div>
                            <div className="cc-text">
                                <i className="fa fa-quote-left"></i>
                                <h4>Ficou acima da minha expectativa, a entrega foi dentro do prazo e a qualidade me surpreendeu já que o preço foi bem em conta.</h4>
                                <i className="fa fa-quote-right"></i>
                                <p>João Fernandes</p>
                            </div>
                            <div id="btn-slide1"><i className="fa fa-chevron-circle-left"></i></div>
                            <div id="btn-slide6"><i className="fa fa-chevron-circle-right"></i></div>
                        </div>
                        <div id="slide3" className="cc-slide">
                            <div className="cc-img">
                                <img src={img2} title="gabriela-nogueira-cliente" alt="mais um cliente satisfeito"></img>
                            </div>
                            <div className="cc-text">
                                <i className="fa fa-quote-left"></i>
                                <h4>A entrega foi bem rápida e toda semana havia uma parte do site pronta para que eu avaliasse, gostei batante do serviço e o preço coube no meu orçamento. Eu recomendo a empresa.</h4>
                                <i className="fa fa-quote-right"></i>
                                <p>Gabriela F. Nogueira</p>
                            </div>
                            <div id="btn-slide5"><i className="fa fa-chevron-circle-left"></i></div>
                            <div id="btn-slide4"><i className="fa fa-chevron-circle-right"></i></div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>    
);

export default ClientContent;