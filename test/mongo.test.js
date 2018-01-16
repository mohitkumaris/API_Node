const   _mongo  =  require('../config/mongo');
const   expect  =  require('expect')

describe('Mongo Connection', ()=> {

    it('should  connect  with MongoDb',function () {

        var  connection  =  _mongo.Connect();
        expect(connection).toBe(true);
    });


});


