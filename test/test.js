'use strict',

const greet = require('..lib/greet.js')
const assert = require('assert')

describe('Greet module', function(){
  describe('#sayHi', function(){
  it('should return hey sugey' function(){
    var result = greet.sayHi('sugey');
    assert.ok(result === 'hey sugey', 'not equal to hey sugey' );
  });
  it ('should throw a missing name error',  function(){
    asser.throws(function(){
      greet.sayHi();
    }, 'error not thrown');
  });
});
describe('#sayBye', function(){
  it('should return hey sugey', function(){
    var bye = 'Good bye! Have a good day',
assert.ok(bye === 'hey sugey'. 'not equal to hey sugey');
  });
});
});
