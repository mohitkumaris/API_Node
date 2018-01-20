"use strict"

const   model  =  require('../models/UserModel');

var  LoginController =  (function () {

    var controller  = {};

    controller.Login  = (req,res) => {
        model.findOne({
            email:  req.body.email,
            password: req.body.password
        }).then((doc)=>{

         return   doc.generateAuthecation()

        }).then((token)=>{

            res.header('x-auth',token.token).send(token.user);

        }).catch((e)=>{
            res.sendStatus(401);
        })

    }

    controller.Save  =  (req, res) => {
        var  dataModel  =  new model({
            email :  req.body.email,
            password : req.body.password

        });



        dataModel.save().then(()=>{
            res.send(dataModel);

        }).catch((e)=>{
            res.status(400).send(e)
        })

    }
    return  controller;
})();

module.exports = LoginController;