var expect = require('chai').expect;
var request = require('request');
var server = require('../server');
var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('server response', function(){

  it("should return a status code of 200", function(done){
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      });
   });
});