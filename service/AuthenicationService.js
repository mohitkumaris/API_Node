'use strict'

const  userModel  = require('../models/UserModel');

var  AuthenticationService  =  (function () {

    var handler  = {};

    handler.AuthenticateUser  = (req,res,next) => {
        var  token = req.header('x-auth');

        userModel.FindByToken(token).then((token)=>{
             console.log(token);
             next();

        }).catch((e)=>{
            res.sendStatus(401);
        });


    }

    return  handler;
})();


module.exports =  AuthenticationService;