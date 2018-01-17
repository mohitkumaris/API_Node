"Use Strict";
const  mongoose  =  require('mongoose');

var  dashboard = new mongoose.model('DashBoard',{

    Database : {
        type: string
    },
    DashBoardId : {
        type  : string
    },
    DasbBoardTitle : {
       type : string
    },

    ScreenSuite : {
        type : object
    }

});



module.exports =  dashboard;