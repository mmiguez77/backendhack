const UserModel = require("../models/userSchema.js");
const GoogleModel = require("../models/googleSchema.js")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const logger = require("../helpers/winston.js");
const mailing = require("../helpers/nodemailer/nodemailer.js");
const templateNewUser = require("../helpers/nodemailer/templateNewUser.js");
const config = require ('../config/index.js');


passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  UserModel.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  "register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async function (req, email, password, done) {

        try {
          const { nombre, email, password, emprendimiento, descripcion, consulta, rol } = req.body;
            const userInDb = await UserModel.findOne({ email: email });
          
          if (userInDb) { 
            return done(null, false, req.flash("error", "Usuario ya registrado"));
          } else {
            const newUser = new UserModel({ email, password, nombre, emprendimiento, descripcion, consulta, rol});
  
            if (req.file) { newUser.logo = req.file.path};
  
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
  
            const html = await templateNewUser(nombre);
            await mailing("", email, "Nuevo Registro de Emprendedor", html);
  
            return done( null, newUser, req.flash("success", "Usuario registrado con éxito"));
          }
        } catch (error) {
          req.flash("error", "Hubo un error, por favor contáctese con el administrador")
          logger.error.error(error.message);
        }      
    }
  )
);

passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_CLIENT_ID,
  clientSecret: config.FACEBOOK_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/user/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails'],
  scope: ['email']
}, function (accessToken, refreshToken, userProfile, done) {
  console.log(userProfile);//! BORRAR 
  return done(null, userProfile);
}));

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/user/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    GoogleModel.findOrCreate({ googleId: profile.id, username: profile.displayName }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const { email, password, rol } = req.body;
        const userRegistered = await UserModel.findOne({ email: email }); 
               
        if (!userRegistered) {
          return done( null, false, req.flash("error", "Usuario y/o Password inválido"));
        } else {
          const matchPassword = await userRegistered.checkPassword(password);
          if (matchPassword) {
            return done( null, userRegistered );
          } else {
            return done( null, false, req.flash("error", "Usuario y/o Password inválido"));
          }
        }
      } catch (error) {
        req.flash("error", "Hubo un error, por favor contáctese con el administrador")
        logger.error.error(error.message);
      }
    }
  )
);

module.exports = passport;
