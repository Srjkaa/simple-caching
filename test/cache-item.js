const assert = require('assert');
const { CacheItemModel } = require('../src/models/CacheItemModel');

describe('CacheItemModel', function() {
  describe('Creating instance with a given value', function() {
    const cacheItem = new CacheItemModel(1);

    it('should create an instance of CacheItemModel', function() {
      assert.ok(cacheItem);
    });

    it('value of CacheItemModel should be equal to the value provided on class creating', function() {
      assert.equal(cacheItem.value, 1);
    });

    it('cache item uses count after creating should be equal 0', function() {
      assert.equal(cacheItem.usesCount, 0);
    });

    it('cache item uses count should increases', function() {
      const cacheItem = new CacheItemModel(1);
      assert.equal(cacheItem.usesCount, 0);
      cacheItem.increaseUsesCount();
      cacheItem.increaseUsesCount();
      cacheItem.increaseUsesCount();
      cacheItem.increaseUsesCount();
      cacheItem.increaseUsesCount();
      assert.equal(cacheItem.usesCount, 5);
    });

  })
});
