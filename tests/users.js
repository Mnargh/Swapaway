var expect = require('chai').expect;
var request = require('request');
var server = require('../server');
var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Users Routes', function(){

  it("/users should return a status code of 200", function(done){
    chai.request(server)
      .get('/users')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      });
   });

   it("/users should return all users", function(done){
     chai.request(server)
       .get('/users')
       .end(function (err, res) {
         expect(res.text).to.equal("working")
         done()
       });
    });
});
