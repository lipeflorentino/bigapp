// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/ebook-content.scss';


//importando componentes

//Content
const EbookContent = () => (
    <div>
        <div className="ebook-content" id="toEbook">
        <div className="ec-background"></div>
        <div className="ec-background-img"></div>
            <div className="ec-titulo">
                <h3>Quer Saber Mais?</h3>
                <p>baixe gratuitamente o ebook.</p>
                <a href="#" className="btn-class">Link Button</a>
            </div>
        </div>    
    </div>    
);

export default EbookContent;