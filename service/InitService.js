"use strict";

var  express  =  require('express');
const   _constant  = require('../config/constant').Get();
const  _routes  = require('../config/routeConfig').GetRoutes();

var  Init  = (function () {
    var  instance ;
    function  initializeObject() {
         require("../config/mongo").Connect();

         var app  =  express();

         //  for  routing
         for(var  route in  _routes){
             app.use(_constant.BasePath + route, _routes[route]);
         }

         app.listen(_constant.PORT,function () {
             console.log("Listening to  port " + _constant.PORT);
         })
         return  app;
    }

    return{

        Start :  () => {
            if(instance == null)
            {
                instance  =    initializeObject();
            }
            return  instance;
        }

    }

})();

module.exports  = Init;
