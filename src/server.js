/* -------------------- Dependencias ---------------------- */
const express = require("express");
const { Server: HttpServer } = require("http");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const morgan = require("morgan");
const logger = require("./helpers/winston.js");
const config = require("./config/index.js");
const passport = require("passport");
require("./passport/passport.js");
const path = require('path')

/* -------------------- Rutas ---------------------- */
const userRoutes = require("./routes/user.routes.js");
const challengesRoutes = require("./routes/challenges.routes.js");
const answersRoutes = require("./routes/answers.routes.js");

/* -------------------- Configuracion Server ---------------------- */
const app = express();
const httpServer = new HttpServer(app);

/* -------------------- Conexion MongoDB ---------------------- */
const CxnMongoDAO = require("./DAO/CxnMongoDAO.js");
new CxnMongoDAO();

/* -------------------- Middlewares ---------------------- */
app.use(cookieParser());
app.use(
  session({
    secret: "secreto",
    rolling: true,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1800000 }, // 1800000 Milisegundos = 30 Minutos
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("./src/public"));
app.use('/user/src/upload', express.static(path.join(__dirname, 'upload')))
app.use(flash());
app.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  res.locals.session = req.session;
  next();
});

/* -------------------- Ejs ---------------------- */
app.set("views", "./src/views");
app.set("view engine", "ejs");

/* -------------------- Endpoints ---------------------- */
app.use("/user", userRoutes);
app.use("/challenges", challengesRoutes);
app.use("/answers", answersRoutes);
app.get("/", function (req, res) {
  res.render("index");
});

/* -------------------- Servidor ---------------------- */
const PORT = config.PORT;

const server = httpServer.listen(PORT, () => {
  logger.info.info(
    `Se inició servidor en Puerto ${PORT} - PID WORKER: ${process.pid}`
  );
});
server.on("error", (error) => {
  console.error(`Error al iniciar servidor ${error}`)
  logger.error.error(`Error al iniciar servidor ${error}`)
});
