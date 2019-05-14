// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css e scss
import '../stylesheet/footer-content.scss';

import { Link } from 'react-router-dom';

//Content
const FooterSocials = () => (
    <div>
        <div className="ft-socials">
            <Row>
                <Col m={3} s={12}>
                    <div className="ft-info-rect">
                        <h5>Informações</h5>
                        <i className="fa fa-mobile-phone"></i><p>(22) 99746-1629</p>
                        <i className="fa fa-envelope"></i><p>bigsolucoesdigitais@gmail.com</p>
                        <i className="fa fa-map-o"></i><p>Rua Domingues Sávio Nogueira Saad, nº 120, apt. 1004. Boa Viagem, Niterói - RJ</p>
                    </div>
                </Col>
                <Col m={6} s={12}>
                    <div className="ft-rect">
                        <h5>Redes Sociais</h5>
                        <a href="/"><i className="fa fa-facebook-square"></i></a>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                        <a href="/"><i className="fa fa-linkedin"></i></a>
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
            <div className="ft-menu-container">
                <div className="ft-menu">
                    <ul>
                        <li className="toHome"><a href="/">Home</a></li>
                        <li className="btn-class-footer"><Link to="/sites" onClick={window.scrollTo(0, 0)}>Sites</Link></li>
                        <li className="btn-class-footer"><Link to="/sistemas" onClick={window.scrollTo(0, 0)}>Sistemas</Link></li>
                        <li className="btn-class-footer"><Link to="/negocios" onClick={window.scrollTo(0, 0)}>Negócios</Link></li>
                        <li className="btn-class-footer"><Link to="/contato" onClick={window.scrollTo(0, 0)}>Contato</Link></li>
                    </ul>        
                </div>
            </div>
        </div>
        
        <div className="ft-copyright">
            <p>Copyright@ 2019 BIG Soluções Digitais </p>
        </div>
    </div>    
);

export default FooterSocials;