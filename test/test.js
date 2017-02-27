'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Great module', function() {
  describe('#sayHey', function(sayHey) {
    it('should return hey sugey!', function() {
      var result = greet.sayHey('sugey');
      expect(greet).to.have.property('sayHey');


    });
    it('should throw a missing name error', function() {
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function() {
    it('should return see ya later sugey!', function() {
      var result = greet.sayBye('sugey');
      expect(greet).to.have.property('sayBye');
    });
  });
});
