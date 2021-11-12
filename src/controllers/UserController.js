const UserModel = require("../models/userSchema.js");
const TokenModel = require("../models/tokenSchema.js");
const config = require("../config/index.js");
const crypto = require("crypto");
const mailing = require("../helpers/nodemailer/nodemailer.js");
const templatePassReset = require("../helpers/nodemailer/templatePassReset.js");
const { encryptPassword } = require("../helpers/bcrypt.js");
const logger = require("../helpers/winston.js");


class UserController {
  /* -------------------- Register ---------------------- */
  registerGet(req, res) {
    res.render("register");
  }

  /* -------------------- Login ---------------------- */

  loginGet(req, res) {
    res.render("login");
  }

  mainGet(req, res) {
    res.render("main");
  }

  logout(req, res) {
    req.logout();
    res.redirect("/user/login");
  }

  /* -------------------- Recuperar password ---------------------- */

  async passwordReset(req, res) {
    try {
      const email = req.body.email;

      const user = await UserModel.findOne({ email: email });
      if (!user) return res.status(400).send({Error: "Hubo un error al intentar recuperar la contraseña"});

      let token = await TokenModel.findOne({ userId: user._id });
      if (!token) {token = await new TokenModel({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex")}).save()
      };

      const url = `${config.BASE_URL}/password-reset/${user._id}/${token.token}`;
      const body = templatePassReset(user.username, url);

      await mailing("", user.email, "Solicitud de reseteo de password", body);

      res.status(200).send({Message: "Link para reseteo enviado al mail informado"});
    } catch (error) {
      res.status(400).send({Error: "Hubo un error, por favor contáctese con el administrador"});
      logger.error.error(error.message);
    }
  }

  async validateReset(req, res) {
    try {
      const userId = await req.params.userId;
      const tokenId = await req.params.token;
      const newPass = await req.body.password;

      console.log(userId, tokenId, newPass);

      const user = await UserModel.findById(userId);

      if (!user) return res.status(400).send({Error: "Link inválido o expirado"});

      const token = await TokenModel.findOne({
        userId: user._id,
        token: tokenId,
      });
      if (!token) return res.status(400).send({Error: "Link inválido o expirado"});

      const encryptPass = await encryptPassword(newPass);

      user.password = encryptPass;
      await user.save();
      await token.delete();

      res.status(200).send({Message: "Password recuperado correctamente"});
    } catch (error) {
      res.status(400).send({Error: "Hubo un error, por favor contáctese con el administrador"});
      logger.error.error(error.message);
    }
  }

  async getValidateReset(req, res) {
    const userId = await req.params.userId;
    const tokenId = await req.params.token;
    const url = `${userId}/${tokenId}`;

    res.render("reset", { url: url });
  }
}

module.exports = UserController;
