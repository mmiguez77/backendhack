const templateNewUser = async (userName) => {
  
    const name = await userName 
        return html = `

        <div margin-left:300px; width: 800px; height: 600px">

        <h1 style="margin-left: 40px; margin-top: 60px; color: #196C84; font-size:3em" >_hola ${name},</h1>

        <p style="margin-left: 40px; font-size:1.5em; color: #196C84;" >
            <b>¡bienvenido!</b>
        </p> 

        <p style="margin-left: 40px; font-weight: 500;">estamos muy contentos que te hayas registrado en nuestra comunidad de emprendedores.</p>

        <p style="margin-left: 40px; font-weight: 500;">te invitamos a realizar el seguimiento de tu reto en nuestra web 
        y llevar adelante tu <b>hold_up</b> junto a </p>
        <p style="margin-left: 40px; font-weight: 500;"><b>make_sense</b> y <b>los ciudadanos</b>.</p>
        
        <p style="margin-right: 100px; font-weight: 500;margin-top: 50px; text-align:right;">estamos en contacto.</p>

        </div>`;
};

module.exports = templateNewUser;
