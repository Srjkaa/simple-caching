
class Cache {

  constructor(cacheSize = 1000) {
    this.maxCacheSize = cacheSize;
    this.currentCacheSize = 0;
    this.value = {};
  }

  has(key) {
    return key in this.value;
  }

  // TODO: add check for overflow
  add(key, value) {
    this.value[key] = value;
    ++this.currentCacheSize;
  }

  get(key) {
    return this.value[key];
  }

}

module.exports.Cache = Cache;
