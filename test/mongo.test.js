const   _mongo  =  require('../config/mongo');


it('should  connect  with MongoDb',function () {

    var  connection  =  _mongo.Connect();
    if(!connection)
        throw  new  Error("Error !!  connecting  with  mongoDb");
});