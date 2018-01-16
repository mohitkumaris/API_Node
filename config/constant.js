"use strict";
var  constant  = (function () {

    var constant ;
    function setConstant() {

        return {
            PORT :  8089,
            MongoConnection :  "",
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