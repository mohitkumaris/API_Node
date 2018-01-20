"use strict"

const   model  =  require('../models/UserModel');

var  LoginController =  (function () {

    var controller  = {};
    controller.Login  =  (req, res) => {
        var  dataModel  =  new model({
            email :  req.body.email,
            password : req.body.password

        });

        console.log('start')
        console.log('start')
        dataModel.save().then(()=>{
          return  dataModel.generateAuthecation()
        }).then((token)=>{
            console.log(token);
            res.header('x-auth',token).send(dataModel);

        }).catch((e)=>{
            res.status(400).send(e)
        })

    }
    return  controller;
})();

module.exports = LoginController;