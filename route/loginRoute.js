"use strict";

var  express  =  require("express");
var  loginController =  require('../controller/LoginController')

var  app  = express.Router();

app.route("/").post(loginController.Login);


module.exports =  app;
