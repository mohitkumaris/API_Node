"use strict"

var  express  =  require("express");
var  dashboardController =  require('../controller/DashboardController')
var authenticationService  =  require('../service/AuthenicationService');
var  app  = express.Router();




app.route('/').post(dashboardController.Save);
app.route('/:dashboardId').post(dashboardController.Get);


module.exports =  app;