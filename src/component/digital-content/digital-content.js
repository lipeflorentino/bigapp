// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import {Row, Col} from 'react-materialize';
// Importando css e scss
import './stylesheet/digital-content.scss';
// Importando img
import img from '../../img/multiplataform2.png';
import site_img from '../../img/multiplataform2.png';
// Importando js
import './javascript/mini-menu.js';

//importando componentes

//Content
const DigitalContent = () => (
    <div>
        <div className="dc-titulo">
            <Row>
                <Col m={6} s={12}>
                    <div className="dc-title-img dc-title-img-show">
                        <img src={site_img} title="" alt=""></img>
                    </div>
                </Col>
                <Col m={6} s={12}>
                    <div className="dc-title-text">
                        <h2>Nossas Soluções</h2>
                        <p>Quer um <strong>site</strong> institucional para aumentar suas vendas? Quer um <strong>sistema</strong> para gerenciar o seu estoque ou um CRM para gerenciar os seus clientes? Fale conosco, temos soluções otimizadas para <strong>pequenas empresas</strong> com preços acessíveis.</p>
                        <a href="/" className="btn-class">COMECE AGORA MESMO</a>
                    </div>
                </Col>
                <div className="clearfix"></div>
            </Row>
        </div>
        <div className="digital-content content" id="toDigital">
            <div className="digital-background"></div>
            <div className="dc-menu">
                <ul>
                    <li><div id="display-site" className="losango dc-active"></div></li>
                    <li><div id="display-sistema" className="losango"></div></li>
                    <li><div id="display-ideias" className="losango"></div></li>
                    <li><div id="display-design" className="losango"></div></li>
                </ul>
            </div>
            <Row>
                <Col m={12} s={12}>
                    <div className="dc-container">
                        <div id="site" className="dc-text dc-show">
                            <h3>Websites</h3>
                            <p><strong>Sites</strong> desenvolvidos com as mais recentes tecnologias, otimizadas e seguindo técnicas avançadas de <strong>SEO</strong> para tornar visível seu website e sua empresa nos melhores mecanismos de busca como Google.</p>
                            <a href="/" className="btn-class">SAIBA MAIS</a>
                        </div>
                        
                        <div id="sistema" className="dc-text">
                            <h3>Sistemas</h3>
                            <p>Você faz muito trabalho manual na sua empresa, gasta toneladas de papel com anotações de dados importantes, que tal colocar tudo isso num <strong>sistema</strong> na nuvem, seguro e facilmente gerenciável por você? Assim você teria mais tempo livre para fazer outras coisas e sua vida seria muito mais fácil. Além da vantagem competitiva frente aos concorrentes.</p>
                            <a href="/" className="btn-class">SAIBA MAIS</a>
                        </div>
                        
                        <div id="ideias" className="dc-text">
                            <h3>Negócios Digitais</h3>
                            <p>Quase todo mundo está online, os negócios estão online. Tem uma ideia maluca? Muitos negócios bem sucedidos começaram assim. Fale conosco, podemos transformar a sua ideia em um <strong>negócio digital</strong>.</p>
                            <a href="/" className="btn-class">SAIBA MAIS</a>
                        </div>
                        
                        <div id="design" className="dc-text">
                            <h3>SEO</h3>
                            <p>Os mecanismos de busca como Google são hoje, a principal forma de pesquisa de potenciais clientes, se o seu <strong>site</strong> não estiver bem posicionado nesses mecanismos, dificilmente sua empresa será encontrada e irá perder um enorme potencial de vendas. Com as melhores tecnicas de <strong>SEO</strong> e mais alguns fatores, nós podemos ajudar a sua empresa a se posicionar melhor nos mecanismos, aumentando sua possibilidade de vendas.</p>
                            <a href="/" className="btn-class">SAIBA MAIS</a>
                        </div>
                    </div>
                </Col>    
            </Row>
            <div className="clearfix"></div>
        </div>
    </div>
);

export default DigitalContent;