"use strict";
var  constant  = (function () {

    var constant ;
    function setConstant() {

        return {
            PORT :  process.env.PORT || 8089,
            MongoConnection :  "mongodb://localhost:27017/products",
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