"use strict";
var  constant  = (function () {

    var constant ;
    function setConstant() {

        return {
            PORT :  8089,
            MongoConnection :  "mongodb://192.168.108.181:27017/products",
            BasePath : "/api"

        }
    }

    return  {
        Get  :  ()  => {
            if(constant == null)
            {
                 constant  =   setConstant();

            }
            return  constant;
        }
    }

})();


module.exports  =  constant;