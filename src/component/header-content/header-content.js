// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col} from 'react-materialize';
// Importando css e scss
import './stylesheet/header-content.scss';

//importando componentes
import { Link } from 'react-router-dom';


//Content
const HeaderContent = () => (
    <div>
        <div className="header-content content" id="toHome">
            <div className="header-background"></div>
            <Row>
                <Col m={12} s={12}>
                    <div className="header-title">
                        <h1>Começe pequeno. Pense grande.</h1>
                        <p>Criação de sites, sistemas e negócios digitais para pequenas empresas.</p>
                        <Link to="http://www.bigempreendimentos.com.br/contato" onClick={window.scrollTo(0, 0)} className="btn-class">COMECE AGORA</Link>
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default HeaderContent;