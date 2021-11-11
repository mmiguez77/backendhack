const templateNewUser = async (userName) => {
  
    const name = await userName 
        return html = `
        <h1>Hola ${name},</h1>

        <p>Estamos muy contentos que te hayas registrado en nuestra comunidad de emprendedores 
        sustentables.</p>
        <p>Te invitamos a realizar el seguimiento de tu reto en nuestra web (link) y llevar adelante tu 
        hold_up junto a make_sense y los ciudadanos.</p>
        
        <p>Saludos.</p>`;
};

module.exports = templateNewUser;
