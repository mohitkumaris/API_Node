"use strict";

var  express  =  require("express");
var  loginController =  require('../controller/LoginController')

var  app  = express.Router();

app.route("/Login").post(loginController.Login);
app.route("/").post(loginController.Save);

module.exports =  app;
