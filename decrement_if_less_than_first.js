/*! cube v0.0.0 - MIT license */
'use strict';

var decrement_if_less_than_first = function (list) {
  if (list.length === 0)
  return [];

  var n = list[0];
  var answer = [];
  for (let value of list)
  {
    if (value < n)
    {
      answer.push(value - 1);
    }
    else
    {
      answer.push(value);
    }
  }
  return answer;
}

if ( typeof module !== "undefined" ) {
  module.exports = decrement_if_less_than_first;
}