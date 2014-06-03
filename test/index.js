var should = require('chai').should(),
  bdm = require('../index'),
  draw = bdm.draw;

describe('#draw', function() {
	it('returns true', function() {
    draw().should.equal(true);
  });
});

// tests.js
describe('BDM', function(){
  describe('#draw()', function(){
    it('should return -1 when the value is not present', function(){
      chai.assert.equal(-1, [1,2,3].indexOf(5));
      chai.assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});