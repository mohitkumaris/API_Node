'use strict'

const  userModel  = require('../models/UserModel');

var  AuthenticationService  =  (function () {

    var handler  = {};

    handler.AuthenticateRequest  = (req,res,next) => {

        var  token = req.header('x-auth');

        if(!token)
        {

            res.send(401);

        }
        userModel.FindByToken(token).then((user)=>{
            if(!user)
                return Promise.reject();

            req.user =  user;
            req.token  =  token;

             next();

        }).catch((e)=>{
            res.sendStatus(401);
        });


    }

    return  handler;
})();


module.exports =  AuthenticationService;