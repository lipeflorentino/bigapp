// Importando o React
import React from "react";
import fetch from 'cross-fetch';
// Importando scss
import './stylesheet/snackbar.scss';

const api = "https://bigweb-lipeflorentino.c9users.io/users";
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log('A name was submitted: ');
        const data = new FormData(event.target);
        this.enviarEmail(event, data);
        
    }
    
    enviarEmail (event, data){
        event.preventDefault();
        console.log('chamou enviarEmail pelo react...');
        const form = {'nome': data.get('nome'), 'email': data.get('email'),'assunto': data.get('assunto'),'mensagem': data.get('mensagem'), 'data_envio': new Date()}
        fetch(api, { 
            method: 'post', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
          .then(response => response.json()) // retorna uma promise
          .then(result => {
            this.showToast();
            console.log('result: ' + result);
          })
          .catch(err => {
          // trata se alguma das promises falhar
          console.error('Failed retrieving information', err);
        });
    }
    showToast(){
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    }

  render() {
    return (
        <div className="ft-form">
            <div className="row ft-pad">
                <div className="ft-titulo">
                    <h4>Contato</h4>
                </div>
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="name" type="text" data-length="15" name="nome" className="validate" required ></input>
                            <label htmlFor="name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">alternate_email</i>
                            <input id="email" type="email" data-length="15" className="validate" name="email" required ></input>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">create</i>
                            <input id="assunto" type="text" data-length="20" className="validate" name="assunto" required ></input>
                            <label htmlFor="assunto">Assunto</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">comment</i>
                            <textarea id="mensagem" className="materialize-textarea" data-length="120" name="mensagem" required ></textarea>
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
            <div id="snackbar">Valeu! Já já entraremos em contato.</div>
        </div>
    );
  }
}

export default MyForm;