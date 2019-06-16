const assert = require('assert');
const { TriangleSidesValidator } = require('../src/validation/TriangleSidesValidator');

describe('TriangleSidesValidator class', () => {

  it('validate function is accessible without creating class instance', () => {
    assert.ok(TriangleSidesValidator.validate);
  });

  it('class error message is accessible without creating class instance', () => {
    assert.ok(TriangleSidesValidator.ERROR_MESSAGE);
  });

  it('validate function should return a false value if side is not a number or a falsey value', () => {
    assert.notEqual(TriangleSidesValidator.validate(NaN), true);
    assert.notEqual(TriangleSidesValidator.validate(0), true);
    assert.notEqual(TriangleSidesValidator.validate(null), true);
    assert.notEqual(TriangleSidesValidator.validate(undefined), true);
    assert.notEqual(TriangleSidesValidator.validate(''), true);
    assert.notEqual(TriangleSidesValidator.validate('qweasdzxc'), true);
  });

  it(`validate function should return false if a given value more than ${Number.MAX_SAFE_INTEGER}`, () => {
    assert.notEqual(TriangleSidesValidator.validate(Number.MAX_SAFE_INTEGER + 1), true);
  });

});
