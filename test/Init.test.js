const  request  =  require('supertest')
const   expect =  require('expect')

var app  =  require('../service/InitService').Start();


it('Login Test',(done)=>{

    request(app)
        .post('/api/Login')
            .expect('OK')
                 .end(done);

});

