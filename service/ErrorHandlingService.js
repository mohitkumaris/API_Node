"use strict";

var  ErrorHandler  = (function () {

    var handler   =   {};

    handler.OnError  = (err, req, res, next) =>{
         res.status(500)
        res.render('error', { error: 'err' })

    }

    return handler;

})();


module.exports =  ErrorHandler;