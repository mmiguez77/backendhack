const templatePassReset = (userName, url) => {
  
        return html = `
        <div margin-left:300px; width: 800px; height: 600px">

        <h1 style="margin-left: 40px; margin-top: 60px; color: #196C84; font-size:3em" >_hola ${userName},</h1>

        <p style="margin-left: 40px; font-size:1.5em; color: #196C84;" >
            <b>¡bienvenido!</b>
        </p> 

        <p style="margin-left: 40px; font-weight: 500;">
            Hemos recibido la solicitud para restablecer tu contraseña para tu perfil 
            de emprendedor en </p>
        <p style="margin-left: 40px; font-weight: 500;"><b>make_sense hold_up.</b></p> 

        <p style="margin-left: 40px; font-weight: 500; margin-top: 30px">Simplemente haz click <b></p>
        
        <button style="margin-top: 5px; margin-left: 300px; background-color:#196C84; border-radius: 50px;
        width: 160px; height: 60px; border: none;">
            <a href=${url} style="text-decoration: none; color:white; font-weight: 600">
                
                setear una nueva contraseña</a>
        </button>

        </b> 

        <p style="margin-left: 40px; font-weight: 500; margin-top: 40px">Si no solicitaste cambiar tu contraseña, ¡no te preocupes!. La misma se encuentra 
            segura y puedes eliminar este correo sin mayor preocupación.</p>
        
        <p style="margin-right: 100px; font-weight: 500;margin-top: 50px; text-align:right;">estamos en contacto.</p>

    </div>`;
};

module.exports = templatePassReset;
