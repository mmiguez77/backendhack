const templatePassReset = (userName, url) => {
  
        return html = `
        <h2>Hola ${userName},</h2>

        <p>Hemos recibido la solicitud para restablecer tu contraseña para tu perfil 
        de emprendedor en make_sense hold_up.</p>
        <p>Simplemente haz click <b><a href=${url}>AQUI</a></b> para setear una nueva contraseña:</p>
        
        </br>
        <p>Si no solicitaste cambiar tu contraseña, ¡no te preocupes!. La misma se encuentra 
        segura y puedes eliminar este correo sin mayor preocupación.</p>
        <p>Gracias.</p>`;
};

module.exports = templatePassReset;
