var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe("test routes.js",function(){
  it("should return",function(done){
    server.get("/api/User/getAll")
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      res.body.error.should.equal(false);
      done();
    });
  });

});
