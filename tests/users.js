var expect = require('chai').expect;
var request = require('request');
var server = require('../server');
var chai = require('chai'), chaiHttp = require('chai-http');
var should = chai.should();

var User = require('../models/users')

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


  it('/users/login Users can login they have already have a account', function(done) {

    var user = new User({ email: 'umairbashir95@hotmail.com', username: "tester", password: 'scxsacs'});
  
    chai.request(server)
      .post('/users/login')
      .send(user)
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('Array');
        res.body[0].should.have.property('email');
        res.body[0].should.have.property('username');
        res.body[0].should.have.property('password');
        res.body[0].should.have.property('bio');                
        done();
      });

  });

  it('it should GET a user by the given id', function(done) {
    let user = new User({ email: "testing@hotmail.com", username: "tester", password: "12345", bio: "J.R.R. Tolkien"});
    user.save(function(err, user) {
        chai.request(server)
        .get('/users/' + user.id)
        .send(user)
        .end(function(err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('email');
            res.body.should.have.property('username');
            res.body.should.have.property('password');
            res.body.should.have.property('bio');                
            res.body.should.have.property('_id').eql(user.id);
          done();
        });
    }); 
  });

  it('it should DELETE a user given the id', function(done) {
    var user = new User({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778})
    user.save(function(err, user) {
            chai.request(server)
            .delete('/users/' + user.id)
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('user successfully deleted!');
                res.body.result.should.have.property('ok').eql(1);
                res.body.result.should.have.property('n').eql(1);
              done();
            });
      });
  });


});
