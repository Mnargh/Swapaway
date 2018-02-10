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

    //Should write test for whether server is actually providing the correct response from the database
    // to pass on to the front end

    it("/users/new can create a new user", function(done){
      chai.request(server)
        .post('/users/new')
        .end(function (err, res) {
          expect(res).to.have.status(200)
          done()
        });
     });
});
