"Use Strict"

var  DashboardController  =  function () {

    var controller = {};


    controller.Save = (req,res)=>{

        console.log(res);

        res.sendStatus(200);

    }

    return  controller;

}


module.exports = DashboardController;
