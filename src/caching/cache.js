const { CacheItemModel } = require('../models/CacheItemModel');
const { LeastFrequentUsedStrategy } = require('./stragegies/LeastFrequentUsedStrategy');

class Cache extends LeastFrequentUsedStrategy {

  constructor(cacheSize) {
    super();
    this.maxCacheSize = cacheSize;
    this.currentCacheSize = 0;
  }

  has(key) {
    return key in this.value;
  }

  add(key, value) {
    if (this.currentCacheSize === this.maxCacheSize) {
      const cacheKeyToOmit = this.getFirstLeastFrequentUsedCacheItem();
      return this.replaceCacheItems(cacheKeyToOmit, key, value);
    }

    this.value[key] = new CacheItemModel(value);
    ++this.currentCacheSize;
  }

  get(key) {
    const cacheItem = this.value[key];
    cacheItem.increaseUsesCount();
    return cacheItem;
  }

}

module.exports.Cache = Cache;
