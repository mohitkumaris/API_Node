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
        Get  : function () {
            if(constant == null)
            {
                 constant  = new  setConstant();

            }
            return  constant;
        }
    }

})();


module.exports  =  constant;