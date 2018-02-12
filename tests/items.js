var expect = require('chai').expect;
var request = require('request');
var server = require('../server');
var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Users Routes', function(){

  it("/items should return a status code of 200", function(done){
    chai.request(server)
      .get('/items')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      });
   });

   it("users can send a successful request to create a new item", function(done){
     chai.request(server)
      .post('/items/new')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      });
   });
});
