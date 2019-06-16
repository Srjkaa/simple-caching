const assert = require('assert');
const { CacheItemModel } = require('../src/models/CacheItemModel');

describe('CacheItemModel', () => {
  const cacheItem = new CacheItemModel(1);

  it('should create an instance of CacheItemModel', () => {
    assert.ok(cacheItem);
  });

  it('value of CacheItemModel should be equal to the value provided on class creating', () => {
    assert.equal(cacheItem.value, 1);
  });

  it('cache item uses count after creating should be equal 0', () => {
    assert.equal(cacheItem.usesCount, 0);
  });

  it('cache item uses count should increases', () => {
    const cacheItem = new CacheItemModel(1);
    assert.equal(cacheItem.usesCount, 0);
    cacheItem.increaseUsesCount();
    cacheItem.increaseUsesCount();
    cacheItem.increaseUsesCount();
    cacheItem.increaseUsesCount();
    cacheItem.increaseUsesCount();
    assert.equal(cacheItem.usesCount, 5);
  });

});
