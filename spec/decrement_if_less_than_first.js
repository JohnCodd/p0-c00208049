var path = require('path');
var expect = require('chai').expect;

var decrement_if_less_than_first = require(path.join(__dirname, '..', './decrement_if_less_than_first.js'));

describe('decrement_if_less_than_first()', function () {
  'use strict';

  it('exists', function () {
    expect(decrement_if_less_than_first).to.be.a('function');

  });

  it('Works with 1 value', function () {
    expect(decrement_if_less_than_first([4])).to.eql([4]);
  });

  it('Works with small lists', function () {
    expect(decrement_if_less_than_first([4,2,8,3,9,4])).to.eql([4,1,8,2,9,4]);
  });

  it('Works with big lists', function(){
    expect(decrement_if_less_than_first([4,2,8,3,9,4,10,5,11,6,1])).to.eql([4,1,8,2,9,4,10,5,11,6,0]);
  })

  it('Works with empty', function() {
    expect(decrement_if_less_than_first([])).to.eql([]);
  })
});
