"Use Strict"

var  model  =  require('../models/DashboardModel');

var  DashboardController  =  (function () {

    var controller = {};
    controller.Save = (req, res) => {
        var  modelToSave  =  new model({
            Database : req.body.Database,
            DashBoardId : req.body.DashBoardId,
            DashBoardTitle :  req.body.DashBoardTitle
        });

        modelToSave.save((err,d)=>{
            if(err)
                res.status(400).send(err);
            res.send(d);
        });

    }
    return  controller;
})();

module.exports = DashboardController;
