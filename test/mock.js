var __ = require('../index');
var Joi = require('joi');
var source1 = {
  objectId: "57cc4fea2e958a0068e382b9",
  username:"user001",
  isdisplay:true,
  book:[
  {
      "objectId": "57cc4fea2e958a0068e382b9",
      "name":"book 01",
      "createdAt": "2016-09-04T16:46:34.860Z",
      author:{
        name:"K.kenny.G",
        call:"mr"
      }
    }
  ],
  createdAt : "2016-09-04T16:46:34.860Z"
}

var schema1 = {
  objectId:"",
  username:"",
  isdisplay:"",
  fee:"",
  book:{
    name:"",
    author:{
      name:""
    }
  }
}

var schemaChecker = Joi.object().keys({
    objectId:  Joi.string(),
    username:  Joi.string(),
    isdisplay: Joi.boolean(),
    book:Joi.array()
});

var schemaCheckerWithFee = Joi.object().keys({
    objectId:  Joi.string(),
    username:  Joi.string(),
    isdisplay: Joi.boolean(),
    fee: Joi.empty(),
    book:Joi.array()
});

var assert = require('assert');
describe('basic', function() {
  describe('#sifter()', function() {
    it('should return object without autofill', function(done) {
      var object = __.sifter(source1,schema1,false);
      var result = Joi.validate(object,schemaChecker);
      if(result.error){
         done(result.error);
      }else{
        done();
      }

    });

    it('should return object by autofill', function(done) {
      var object = __.sifter(source1,schema1,true);
      var result = Joi.validate(object,schemaCheckerWithFee);
      if(result.error){
         done(result.error);
      }else{
        done();
      }

    });
  });
});
