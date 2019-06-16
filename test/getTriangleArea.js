const assert = require('assert');
const { getTriangleArea } = require('../src/index');
const { calculateTriangleArea } = require('../src/calculateTriangleArea');
const { base64Encode } = require('../src/encoding/base64Encode');

describe('getTriangleArea function', () => {

  it('it throws RangeError if some side of triangle isn\'t valid', () => {
    assert.equal(getTriangleArea(NaN, 1, 2), RangeError().name);
    assert.equal(getTriangleArea(2, 1, '3'), RangeError().name);
    assert.equal(getTriangleArea(2, null, 2), RangeError().name);
  });

  it('it throws RangeError if given sides isn\'t valid for triangle', () => {
    assert.equal(getTriangleArea(13, 6, 7), RangeError().name);
    assert.equal(getTriangleArea(2, 1, 3), RangeError().name);
    assert.equal(getTriangleArea(2, 4, 2), RangeError().name);

    assert.notEqual(getTriangleArea(5, 6, 7), RangeError().name);
    assert.notEqual(getTriangleArea(2, 1, 2), RangeError().name);
    assert.notEqual(getTriangleArea(2, 4, 3), RangeError().name);
  });

  it('it returns an area of a square with given sides', () => {
    const triangleArea = getTriangleArea(10, 12, 8);
    const manuallyCalculatedArea = calculateTriangleArea(10, 12, 8);
    assert.equal(triangleArea, manuallyCalculatedArea);
  });


  it('it returns an area of a square from cache', () => {
    getTriangleArea(10, 6, 5);
    getTriangleArea(10, 6, 5);
    const cacheKeyForGivenSides = base64Encode('1065');
    assert.equal(getTriangleArea.cache.value[cacheKeyForGivenSides].usesCount, 1);
  });

});
