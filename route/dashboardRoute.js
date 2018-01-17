"use strict"

var  express  =  require("express");
var  dashboardController =  require('../controller/DashboardController')

var  app  = express.Router();

app.route("/").post(dashboardController.Save);


module.exports =  app;