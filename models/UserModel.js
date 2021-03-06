"use strict";
const   mongoose  =  require('mongoose')
const   validator  =  require('validator')
const   _ = require('lodash');
const   constant  = require('../config/constant').Get();
const   jwt  =  require('jsonwebtoken');

var schema  =  new mongoose.Schema({

    email : {
        type : String,
        require : true,
        minlength :  5,
        trim : true,
        validate : {
            validator : validator.isEmail,
            message : '{value}  is not  valid email'
        }

    },

    password : {
        type : String,
        require : true,
        minlength :  6,
        trim : true,

    },

    tokens  : [{
        access : {
            type: String,
            require :  true
        },
        token : {
            type : String,
            require : true

        }
    }]


});


schema.methods.RemoveToken  =  function (token) {

    var  _user  =  this;

    return  _user.update({
         $pull : {
            tokens : {
                token : token
            }
        }
    })

}

schema.statics.FindByToken =  function (token) {

    var  _user = this;
    var decode  ;
    try{
        decode  =  jwt.verify(token,constant.KEY);

    }
    catch (e){

        return new Promise.reject();
    }


    return _user.findOne({

        'tokens.access' : 'auth',
            'tokens.token' :  token

    });

}

schema.methods.toJSON =  function () {
    var _user  = this;
    var _userObject  = _user.toObject();

    return  _.pick(_userObject,['_id','email']);
}

schema.methods.generateAuthecation  =  function () {
    var  _user  = this;
    var  access  =  'auth';
    var token  = jwt.sign({ _id : _user._id.toHexString(),access : access},constant.KEY).toString();

    _user.tokens.push({access:access,token:token});

    return _user.save().then(()=>{
        return  {token: token, user : _user};
    })

}


var  User = mongoose.model("User",schema)



module.exports  =  User;