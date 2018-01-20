"use strict";
const   mongoose  =  require('mongoose')
const   validator  =  require('validator')
const   _ = require('lodash');
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


schema.methods.toJSON =  function () {
    var _user  = this;
    var _userObject  = _user.toObject();

    return  _.pick(_userObject,['_id','email']);
}

schema.methods.generateAuthecation  =  function () {
    var  _user  = this;
    var  access  =  'auth';
    var token  = jwt.sign({ _id : _user._id.toHexString(),access : access},'abc@123!').toString();

    _user.tokens.push({access:access,token:token});

    console.log(_user);
    return _user.save().then(()=>{

        return  token;

    })

}


var  User = mongoose.model("User",schema)



module.exports  =  User;