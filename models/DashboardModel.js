"Use Strict";

const  mongoose  =  require('mongoose');
const  Schema = mongoose.Schema;

var  dashboard =  mongoose.model('DashBoard',{

    Database : {
        type: String
    },
    DashBoardId : {
        type  : String
    },
    DashBoardTitle : {
       type : String
    },
    ScreenSuite : {
        type : Object
    }

});



module.exports =  dashboard;