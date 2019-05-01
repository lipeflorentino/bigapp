// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

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
                <p>Baixe gratuitamente o ebook.</p>
                <a href="./ebook.pdf" className="btn-class" download>Download E-book</a>
            </div>
        </div>    
    </div>    
);

export default EbookContent;