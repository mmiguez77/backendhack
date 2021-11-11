const express = require("express");
const passport = require("passport");
const userRoutes = express.Router();

const User = require("../controllers/UserController.js");
const user = new User();

const validate = require("../middlewares/auth.js");
const upload = require("../middlewares/multer.js");

userRoutes.get("/register", user.registerGet);
userRoutes.get("/main", validate, user.mainGet);
userRoutes.get("/logout", validate, user.logout);
userRoutes.get("/login", user.loginGet);
userRoutes.post("/password-reset", user.passwordReset)
userRoutes.post("/password-reset/:userId/:token", user.validateReset)
userRoutes.get("/password-reset/:userId/:token", user.getValidateReset)

userRoutes.get('/auth/facebook', passport.authenticate('facebook'))
userRoutes.get('/auth/facebook/callback', passport.authenticate('facebook',{
    successRedirect: '/user/main',
    failureRedirect: '/user/login'
}))

userRoutes.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

userRoutes.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/user/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/user/main');
  });

userRoutes.post(
  "/register",
  upload.single("logo"),
  passport.authenticate("register", {
    successRedirect: "/user/login",
    failureRedirect: "/user/register",
    failureFlash: true,
    successFlash: true,
  })
);

userRoutes.post(
  "/login",
  passport.authenticate("login", {
    successRedirect: "/user/main",
    failureRedirect: "/user/login",
    failureFlash: true,
    successFlash: true,
  })
);

module.exports = userRoutes;
