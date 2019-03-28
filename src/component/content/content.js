// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
//importando componente de media query
import MediaQuery from "react-responsive";
// Importando css e scss
import './stylesheet/content.scss';

//importando componentes
import HeaderContent from '../header-content/header-content';
import DigitalContent from '../digital-content/digital-content';
import FeaturesContent from '../features-content/features-content';
import EbookContent from '../ebook-content/ebook-content';
import EmpresaContent from '../empresa-content/empresa-content';

import ClientContent from '../client-content/client-content';
import FooterContent from '../footer-content/footer-content';


//Content
const Content = () => (

    <div className="content-container">
        <HeaderContent />
        <DigitalContent />
        <FeaturesContent />
        <EbookContent />
        <EmpresaContent/>
        
        <ClientContent />
        <FooterContent />
    </div>    
);

export default Content;