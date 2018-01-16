"use strict";


var  LoginController =  (function () {

    var controller  = {};

    controller.Login  =  (req, res) => {
         res.sendStatus(200);
    }
    
    return  controller;

})();



module.exports = LoginController;