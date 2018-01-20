"use strict";
var  route  = (function () {
    var  route;
    function  Routes() {
        return {
            "/user" : require("../route/loginRoute"),
            "/Dashboard" :  require("../route/dashboardRoute"),


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