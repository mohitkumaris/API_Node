"use strict";


var  LoginController =  (function () {

    var controller  = {};

    controller.Login  = function (req, res) {

        console.log("Login Controller");
        res.send(200);
    }
    
    return  controller;

})();



module.exports = LoginController;