const assert = require('assert');
const { base64Encode } = require('../src/encoding/base64Encode');
const { Cache } = require('../src/caching/Cache');
const { CacheItemModel } = require('../src/models/CacheItemModel');
const { LeastFrequentUsedStrategy } = require('../src/caching/stragegies/LeastFrequentUsedStrategy');

describe('Cache and LFU strategy', () => {
  describe('Cache class', () => {

    it('creates the Cache class instance', () => {
      const cache = new Cache(3);
      assert.ok(cache);
    });

    it('new Cache instance has a 0 current cache size', () => {
      const cache = new Cache(3);
      assert.equal(cache.currentCacheSize, 0);
      assert.notEqual(cache.currentCacheSize, 1);
    });

    it('should add key-value pair to the cache value', () => {
      const cache = new Cache(3);
      const key = base64Encode('should add not repeated key-value pair');
      const value = 1e3;
      cache.add(key, value);
      assert.ok(key in cache.value);
    });

    it('should return true if key already exists in cache value', () => {
      const cache = new Cache(3);
      const key = base64Encode('should return true if key already exists in cache value');
      const value = 1e3;
      cache.add(key, value);
      assert.ok(cache.has(key));
    });

    it('should return cached item if it exists', () => {
      const cache = new Cache(3);
      const key = base64Encode('should return cached item if it exists');
      const value = 1e3;
      const cachedItem = new CacheItemModel(value);
      cachedItem.increaseUsesCount();
      cache.add(key, value);
      assert.deepEqual(cachedItem, cache.get(key));
    });

    it('current cache size should increase after adding cached items', () => {
      const cache = new Cache(3);
      const key = base64Encode('should return cached item if it exists');
      const value = 1e3;
      cache.add(key, value);
      assert.equal(cache.currentCacheSize, 1);
    });
  });

  describe('Cache class using Least Frequent Used strategy', () => {
    const cache = new Cache(3);
  });

});
