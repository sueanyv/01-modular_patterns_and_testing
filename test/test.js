'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Great module', function() {
  describe('#sayHey', function(sayHey) {
    it('should return hey john!', function() {
      var result = greet.sayHey('john');
      expect(greet).to.have.property('sayHey');
      expect(greet).sayHey.to.equal('sayHey');

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
