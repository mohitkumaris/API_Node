"use strict";

const  expect  =  require('expect');
const  request  = require('supertest');
const   app  =  require('../service/InitService').Start();


describe('Test for  Dashboard Model',()=>{
    describe('INSERTION',()=>{

        it('Valid  insertion',  (done)=>{

            request(app)
                .post('/api/Dashboard')
                .send({"DashBoardId" : "djfkdjklfjsd",
                    "DashBoardTitle" : "jsdljfkldsjflkjsdkfljldsk"})
                .expect(200).expect((res)=>{

                        console.log(res);
            }).end(done);


        });

        it('InValid  insertion', (done)=>{

             request(app).post('/api/Dashboard').send({"DashBoardId" : "",
                "DashBoardTitle" : ""}).expect(400).end(done);

        });


    });
});


