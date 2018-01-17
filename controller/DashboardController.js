"Use Strict"

var  model  =  require('../models/DashboardModel');

var  DashboardController  =  (function () {

    var controller = {};
    controller.Save = (req, res) => {

        var  modelToSave  =  new model({
            Database : "NedBank",
             DashboardId : "NedBank_Dashboard_84d2568f-4c10-4e12-af4d-5d3e6134647a",
            DashBoardTitle : "NedBank_Actual"

        });

        modelToSave.save(function (err,doc) {
            if(err)
                console.log("Error in  saving Dashboard")

            console.log(doc);

            res.sendStatus(200);
        })



        res.sendStatus(200);

    }
    return  controller;
})();

module.exports = DashboardController;
