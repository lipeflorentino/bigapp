// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

//importando componente de media query

// Importando css e scss
import './stylesheet/content.scss';

//importando componentes
import HeaderContent from '../header-content/header-content';
import DigitalContent from '../digital-content/digital-content';
import FeaturesContent from '../features-content/features-content';
import EbookContent from '../ebook-content/ebook-content';
import EmpresaContent from '../empresa-content/empresa-content';
import PilaresContent from '../pilares-content/pilares-content';
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
        <PilaresContent/>
        <ClientContent />
        <FooterContent />
    </div>    
);

export default Content;