"Use Strict";

const  mongoose  =  require('mongoose');
const  Schema = mongoose.Schema;

var  dashboard =  mongoose.model('DashBoard',{

    Database : {
        type: String,
        require :  true,
        minlength : 3,
        trim : true
    },
    DashBoardId : {
        type  : String,
        require:  true,
        minlength: 5,
        trim:true
    },
    DashBoardTitle : {
       type : String,
        require: true,
        minlength : 3,
        trim : true
    },
    ScreenSuite : {
        type : Object,
        default: null
    },
    IsActive  :  {
        type: Boolean,
        default :  true

    }

});



module.exports =  dashboard;