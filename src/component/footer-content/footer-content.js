// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css e scss
import './stylesheet/footer-content.scss';
// Importando a logo

//importando componentes
import MyForm from './form/form.js';

//Content
const FooterContent = () => (
    <div>
        <div className="footer-content content" id="toFooter">
            <div className="ft-titulo">
                <h3>Fale Conosco</h3>
                <p>Aqui entra um texto para convencer o visitante a entrar em contato</p>
            </div>
            <MyForm></MyForm>
        </div>    
        <div className="ft-socials">
            <Row>
                <Col m={3} s={12}>
                    <div className="ft-info-rect">
                        <h5>Informações</h5>
                        <i className="fa fa-mobile-phone"></i><p>(22) 99746-1629</p>
                        <i className="fa fa-envelope"></i><p>comercial@big.com.br</p>
                        <i className="fa fa-map-o"></i><p>Rodovia Amaral Peixoto Km - 78,5 Saquarema - Rio de Janeiro</p>
                    </div>
                </Col>
                <Col m={6} s={12}>
                    <div className="ft-rect">
                        <h5>Redes Sociais</h5>
                        <a href="/"><i className="fa fa-facebook-square"></i></a>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                        <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="ft-menu">
                        <ul>
                            <li className="toHome"><a href="/">Home</a></li>
                            <li><a href="/solucoes-digitais">Soluções</a></li>
                            <li><a href="/oficina-de-startups">Oficina</a></li>
                            <li><a href="/sobre-a-big">Sobre</a></li>
                            <li><a href="/projetos">Projetos</a></li>
                        </ul>        
                    </div>
                </Col>
                <Col m={3} s={12}>
                    <div className="ft-rect-other">
                        <h5>Outras Informações</h5>
                        <a href="/">Politica de privacidade</a>
                        <a href="/">Termos de uso</a>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="ft-copyright">
            <p>Copyright@ 2019 BIG Soluções Digitais </p>
        </div>
        
    </div>    
);

export default FooterContent;