const assert = require('assert');
const { calculateTriangleArea } = require('../src/calculateTriangleArea');

describe('calculateTriangleArea function', () => {
  const triangleSide1 = 16;
  const triangleSide2 = 6;
  const triangleSide3 = 19;
  const semiPerimeter = (triangleSide1 + triangleSide2 + triangleSide3) / 2;

  it('should calculate triangle area right', () => {
    assert.equal(
      calculateTriangleArea(triangleSide1, triangleSide2, triangleSide3),
      Math.sqrt(
        semiPerimeter * (semiPerimeter - triangleSide1) * (semiPerimeter - triangleSide2) * (semiPerimeter - triangleSide3)
      )
    );
  });

});
