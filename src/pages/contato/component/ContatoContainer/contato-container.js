// Importando o React
import React from "react";
// Importando css
import './stylesheet/contato-container.scss';
import '../../../sites/component/SiteContainer/stylesheet/site-container.scss';
// Importando component form
import Form from '../../../../component/footer-content/form/form.js';

const ContatoContainer = () => (
    
    <div>
        <div className="s-container s-container-black">
            <h2>Se ainda tiver alguma dúvida sobre as nossas <strong>soluções digitais</strong>, basta entrar em contato conosco.</h2>
            <Form className="s-form"></Form>
        </div>
    </div>
    
    
    
);

export default ContatoContainer;    