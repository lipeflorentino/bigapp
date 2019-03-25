// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/ebook-content.scss';
import img from '../../img/ebook2.png';

//importando componentes

//Content
const EbookContent = () => (

    <div className="ebook-content content" id="toEbook">
        <div className="header-background"></div>
        <Row>
            <Col m={6} s={12}>
                <div className="ebook-title">
                    <h2>Título em h2</h2>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, </p>
                </div>
            </Col>
            
            <Col m={6} s={12}>
                <div className="ebook-download">
                    <div className="ebook-img">
                        <img src={img} title="" alt="imagem de um ebook"></img>
                        <div className="clearfix"></div>
                    </div>
                    <div className="ebook-btn">
                        <p className="p-subscription">Clique aqui e obtenha o seu e-book gratuito!</p>
                        <a className="btn">Download E-book</a>
                    </div>
                    
                </div>
            </Col>
        </Row>
    </div>    
);

export default EbookContent;