const assert = require('assert');
const { base64Encode } = require('../src/encoding/base64Encode');

describe('base64Encode function', () => {
  const string = 'Don\'t repeat yourself';
  const encodedByFunction = base64Encode(string);

  it('should encode given string to the base64 representation', () => {
    const encodedByBufferToStringMethod = Buffer.from(string).toString('base64');
    assert.equal(encodedByFunction, encodedByBufferToStringMethod);
  });

  it('shouldn\'t be equal to the utf-8 encoded string', () => {
    const encodedByBufferToStringMethodWithDefaultParameter = Buffer.from(string).toString();
    assert.notEqual(encodedByFunction, encodedByBufferToStringMethodWithDefaultParameter);
  });

});
