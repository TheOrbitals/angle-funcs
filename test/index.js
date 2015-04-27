var should = require('chai').should();
var angles = require('../index');

describe('#sin', function(){

  it('returns the sine of a integer', function(){
    angles.udsin(4).should.equal(0.0697564737441253);
  });

});