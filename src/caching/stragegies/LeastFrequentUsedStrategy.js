const { CacheItemModel } = require('../../models/CacheItemModel');

class LeastFrequentUsedStrategy {

  constructor() {
    this.value = {};
  }

  getFirstLeastFrequentUsedCacheItem() {
    let resultKey;
    for (const key in this.value) {
      if (!resultKey) {
        resultKey = key;
      }

      if (this.value.hasOwnProperty(key) && this.value[key].usesCount < this.value[resultKey].usesCount) {
        resultKey = key;
      }
    }
    return resultKey;
  }

  replaceCacheItems(keyToOmit, keyToAdd, valueToAdd) {
    delete this.value[keyToOmit];
    this.value[keyToAdd] = new CacheItemModel(valueToAdd);
  }

}

module.exports.LeastFrequentUsedStrategy = LeastFrequentUsedStrategy;
