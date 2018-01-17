"use strict";

const  expect  =  require('expect');
const  request  = require('supertest');
const   app  =  require('../service/InitService').Start();


describe('Test for  Dashboard Model',()=>{
    describe('INSERTION',()=>{

        it('Valid  insertion',  ()=>{

            request(app)
                .post('/api/Dashboard')
                .send({"DashBoardId" : "djfkdjklfjsd",
                    "DashBoardTitle" : "jsdljfkldsjflkjsdkfljldsk"})
                .expect(400).expect((res)=>{

                        console.log(res);
            });


        });

        it('InValid  insertion', ()=>{

             request(app).post('/api/Dashboard').send({"DashBoardId" : "",
                "DashBoardTitle" : ""}).expect(200);

        });


    });
});


