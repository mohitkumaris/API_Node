"use strict";

var  express  =  require("express");
var  loginController =  require('../controller/LoginController')
var authenticationService  =  require('../service/AuthenicationService');

var  app  = express.Router();

app.post('/',authenticationService.AuthenticateRequest,loginController.Save);
app.post('/Logout',authenticationService.AuthenticateRequest,loginController.LogOut);
app.post('/Login',loginController.Login);



module.exports =  app;
