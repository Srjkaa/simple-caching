
class Cache {

  constructor(cacheSize = 1000) {
    this.maxCacheSize = cacheSize;
    this.currentCacheSize = 0;
    this.value = {};
  }

  has(key) {
    return key in this.value;
  }

  add(key, value) {
    if (this.currentCacheSize === this.maxCacheSize) {
      // TODO: omit value according to selected strategy
      return;
    }

    this.value[key] = value;
    ++this.currentCacheSize;
  }

  get(key) {
    return this.value[key];
  }

}

module.exports.Cache = Cache;
