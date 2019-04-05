// Importando o React
import React from "react";
import fetch from 'cross-fetch';

const api = "https://big-api.herokuapp.com/sendmail";
class MyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    enviarEmail (){
        fetch(api, { mode: 'no-cors' })
          .then(response => response.json()) // retorna uma promise
          .then(result => {
            console.log(result);
          })
          .catch(err => {
          // trata se alguma das promises falhar
          console.error('Failed retrieving information', err);
        });
    }

    handleSubmit(event) {
        console.log('event: ' + event);
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('data: ' + data);
        this.enviarEmail();
    }

  render() {
    return (
        <div className="ft-form">
            <div className="row">
                <form onSubmit={this.handleSubmit.bind(this)} className="col s12">
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