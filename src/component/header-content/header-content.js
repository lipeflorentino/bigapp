// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';
// Importando css e scss
import './stylesheet/header-content.scss';
// Importando img


//importando componentes

//Content
const HeaderContent = () => (
    <div>
        <div className="header-content content" id="toHome">
            <div className="header-background"></div>
            <Row>
                <Col m={12} s={12}>
                    <div className="header-title">
                        <h1>O Título do header otimizado.</h1>
                        <p>Um texto para captar a atenção do usuário e aumentar a taxa de conversão.</p>
                        <a href="/" className="btn-class">Link Button</a>
                    </div>
                </Col>
                
                <Col m={12} s={12}>
                    
                </Col>
            </Row>
        </div>    
    </div>    
);

export default HeaderContent;