
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

}

module.exports.LeastFrequentUsedStrategy = LeastFrequentUsedStrategy;
