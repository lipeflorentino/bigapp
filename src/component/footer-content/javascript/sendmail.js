const nodemailer = require('nodemailer');

function enviaEmail(){
    
    const $usuario = 'lipeflorentino2@gmail.com';
    const $senha = 'condor1010'; 
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: $usuario,
            pass: $senha
        }
    });
    
    const $destinatario = 'lipeflorentino2@gmail.com';
    
    const mailOptions = {
        from: $usuario,
        to: $destinatario,
        subject: 'Enviando um email pelo Node.js',
        text: 'Muito fácil enviar um email pelo node, tente você também!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}   
enviaEmail();
