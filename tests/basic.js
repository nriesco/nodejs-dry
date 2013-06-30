var assert = require("assert");

var math = require(__dirname + '/../public/javascripts/math.js')
var mathFail = require(__dirname + '/../public/javascripts/mathFail.js')

suite('math', function(){
  setup(function(){
    // ...
  });

  suite('#increment(number)', function(){
    test('basic increments', function(){
      assert.equal(1, math.increment(0));
      assert.equal(-3, math.increment(-4));
      assert.equal(0, math.increment(-1));
      assert.equal(1, math.increment(0));
    });
    test('big numbers', function(){
      assert.equal(10000000000, math.increment(9999999999));
    });
    test('non integers', function(){
      assert.equal(4353.345345, math.increment(4352.345345));
    });
  });

  suite('#add(number1, number2)', function(){
    test('basic', function(){
      assert.equal(2, math.add(1, 1));
      assert.equal(0, math.add(4, -4));
      assert.equal(0, math.add(-4, 4));
      assert.equal(4, math.add(4, 0));
      assert.equal(4, math.add(0, 4));
    });
  });
});

suite('mathFail', function(){
  setup(function(){
    // ...
  });

});

