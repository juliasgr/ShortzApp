var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require("express-ejs-layouts");

const session = require('express-session');
const flash = require('connect-flash');

// ROTAS
var indexRouter = require('./routes/index');
var userRoutes = require("./modules/user/userRoutes");
var videoRoutes = require("./modules/video/videoRoutes");
var likeRoutes = require("./modules/like/likeRoutes");
var commentRoutes = require("./modules/comment/commentRoutes");

// APP
var app = express();

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views/pages'));
app.set('layout', path.join(__dirname, 'views/layouts/main'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET || 'frase_secreta_aqui',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.use(flash());

// VARIÁVEIS GLOBAIS PARA VIEWS
app.use((req, res, next) => { 
  res.locals.messages = req.flash();
  res.locals.user = req.session.user || null;
  next();
});

// STATIC
app.use(express.static(path.join(__dirname, 'public')));

// ROTAS
app.use('/', indexRouter);
app.use('/', userRoutes);
app.use('/', videoRoutes);
app.use('/', likeRoutes);
app.use('/', commentRoutes);

// 404
app.use(function(req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// =========================
// BANCO DE DADOS
// =========================
const sequelize = require("./config/database");

// IMPORTANTE: carregar models ANTES das associações
require("./modules/user/userModel");
require("./modules/video/videoModel");
require("./modules/like/likeModel");
require("./modules/comment/commentModel");

// IMPORTANTE: carregar associações
require("./config/associations");

// SINCRONIZAÇÃO
sequelize.sync({ alter: true })
  .then(() => console.log("Banco de dados sincronizado!"))
  .catch(err => console.error("Erro ao sincronizar banco:", err));

module.exports = app;