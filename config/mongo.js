"use strict";


const constant  = require('./constant').Get();
const  mongoose =  require ('mongoose');

var  mongoConnection  = (function () {
    var  connection;

    function  InitiateConnection() {
        mongoose.connect(constant.MongoConnection,function (err,db) {
            if(err)
                return false;
        });
        return  true;
    }
    return {
        Connect  :  () => {
            if(connection== null) {
                connection  =  InitiateConnection();
            }
            return  connection;
        }
    }

})();

module.exports =  mongoConnection;