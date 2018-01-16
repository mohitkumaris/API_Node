"use strict";
var  route  = (function () {
    var  route;
    function  Routes() {
        return {
            "/Login" : require("../route/loginRoute"),


        }
    }

    return  {
        GetRoutes  : function () {
            if(route ==  null)
                route  =  new  Routes();
            return  route;
        }
    }
    

})();


module.exports =  route;