// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando css e scss
import './stylesheet/footer-content.scss';
// Importando a logo
import logo from '../../img/logo/big_logo_new_06.png';
//importando componentes
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: "mail.diegopinho.com.br",
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: {
  	user: "no-reply@diegopinho.com",
  	pass: "senhaqualquerdeteste"
  },
  tls: { rejectUnauthorized: false }
});
const mailOptions = {
  from: 'no-reply@diegopinho.com',
  to: 'destinatario@yahoo.com',
  subject: 'E-mail enviado usando Node!',
  text: 'Bem fácil, não? ;)'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});

//Content
const FooterContent = () => (
    <div>
        <div className="footer-content content" id="toFooter">
            <div className="ft-titulo">
                <h3>Fale Conosco</h3>
                <p>Aqui entra um texto para convencer o visitante a entrar em contato</p>
            </div>
            <div className="ft-form">
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="name" type="text" data-length="15" class="validate"></input>
                            <label for="name">Nome</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">alternate_email</i>
                            <input id="email" type="email" data-length="15" class="validate"></input>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">create</i>
                            <input id="assunto" type="text" data-length="20" class="validate"></input>
                            <label for="assunto">Assunto</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">comment</i>
                            <textarea id="mensagem" class="materialize-textarea" data-length="120"></textarea>
                            <label for="mensagem">Mensagem</label>
                        </div>
                    </div>
                    <div className="ft-btn">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
                            <i class="material-icons right">send</i>
                        </button>
                    </div>  
                  </form>
                </div>
            </div>
        </div>    
        <div className="ft-socials">
            <Row>
                <Col m={3} s={12}>
                    <div className="ft-info-rect">
                        <h5>Informações</h5>
                        <i class="fa fa-mobile-phone"></i><p>(22) 99746-1629</p>
                        <i class="fa fa-envelope"></i><p>comercial@big.com.br</p>
                        <i class="fa fa-map-o"></i><p>Rodovia Amaral Peixoto Km - 78,5 Saquarema - Rio de Janeiro</p>
                    </div>
                </Col>
                <Col m={6} s={12}>
                    <div className="ft-rect">
                        <h5>Redes Sociais</h5>
                        <a href=""><i class="fa fa-facebook-square"></i></a>
                        <a href=""><i class="fa fa-instagram"></i></a>
                        <a href=""><i class="fa fa-linkedin"></i></a>
                    </div>
                    <div className="ft-menu">
                        <ul>
                            <li className="toHome"><a href="">Home</a></li>
                            <li href="/solucoes-digitais"><a href="">Soluções</a></li>
                            <li href="/oficina-de-startups"><a href="">Oficina</a></li>
                            <li href="/sobre-a-big"><a href="">Sobre</a></li>
                            <li href="/projetos"><a href="">Projetos</a></li>
                        </ul>        
                    </div>
                </Col>
                <Col m={3} s={12}>
                    <div className="ft-rect-other">
                        <h5>Outras Informações</h5>
                        <a href="#">Politica de privacidade</a>
                        <a href="#">Termos de uso</a>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="ft-copyright">
            <p>Copyright@ 2019 BIG Soluções Digitais </p>
        </div>
        
    </div>    
);

export default FooterContent;