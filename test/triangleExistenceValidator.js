const assert = require('assert');
const { TriangleExistenceValidator } = require('../src/validation/TriangleExistenceValidator');

describe('TrianglExistenceValidator class', () => {

  it('validate function is accessible without creating class instance', () => {
    assert.ok(TriangleExistenceValidator.validate);
  });

  it('class error message is accessible without creating class instance', () => {
    assert.ok(TriangleExistenceValidator.ERROR_MESSAGE);
  });

  it('validate function should return a false value if side\'s are not valid triangle sides', () => {
    assert.notEqual(TriangleExistenceValidator.validate(5, 10 ,15), true);
    assert.notEqual(TriangleExistenceValidator.validate(1, 1, 3), true);
    assert.notEqual(TriangleExistenceValidator.validate(0, 1, 1), true);
  });

  it('validate function should return a true value if side\'s are valid triangle sides', () => {
    assert.equal(TriangleExistenceValidator.validate(5, 10 ,14), true);
    assert.equal(TriangleExistenceValidator.validate(1, 2, 2), true);
    assert.equal(TriangleExistenceValidator.validate(915, 915, 1), true);
  });

});
