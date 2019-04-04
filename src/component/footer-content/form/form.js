// Importando o React
import React from "react";

const nodemailer = require('nodemailer');

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enviaEmail = this.enviaEmail.bind(this);
  }
  
  enviaEmail(){
    
        const $usuario = 'lipeflorentino2@gmail.com';
        const $senha = 'condor1010'; 
        console.log('adquirindo credentials...');
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            auth: {
                user: $usuario,
                pass: $senha
            }
        });
        console.log('preparando mensagem...');
        const $destinatario = 'lipeflorentino2@gmail.com';
        
        const mailOptions = {
            from: $usuario,
            to: $destinatario,
            subject: 'Enviando um email pelo Node.js',
            text: 'Muito fácil enviar um email pelo node, tente você também!'
        };
        console.log('mensagem pronta para ser enviada!');
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
        
    }   

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('data: ' + data);
        this.enviaEmail();
    }

  render() {
    return (
        <div className="ft-form">
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="name" type="text" data-length="15" className="validate"></input>
                            <label htmlFor="name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">alternate_email</i>
                            <input id="email" type="email" data-length="15" className="validate"></input>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">create</i>
                            <input id="assunto" type="text" data-length="20" className="validate"></input>
                            <label htmlFor="assunto">Assunto</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">comment</i>
                            <textarea id="mensagem" className="materialize-textarea" data-length="120"></textarea>
                            <label htmlFor="mensagem">Mensagem</label>
                        </div>
                    </div>
                    <div className="ft-btn">
                        <button className="btn waves-effect waves-light">Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>  
                </form>
            </div>
        </div>
    );
  }
}

export default MyForm;