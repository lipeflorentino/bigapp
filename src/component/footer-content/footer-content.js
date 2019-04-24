// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

// Importando css e scss
import './stylesheet/footer-content.scss';
// Importando a logo

//importando componentes
import MyForm from './form/form.js';
import FooterSocials from './footer-socials/footer-socials';

//Content
const FooterContent = () => (
    <div>
        <div className="footer-content content" id="toFooter">
            <div className="ft-titulo">
                <h3>Fale Conosco</h3>
                <p>Qualquer dúvida que tiver, teremos prazer em responder.</p>
            </div>    
            <MyForm></MyForm>
        </div>   
        <FooterSocials></FooterSocials>
    </div>    
);

export default FooterContent;