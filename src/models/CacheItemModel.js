
class CacheItemModel {

  get usesCount() {
    return this._usesCount;
  }

  constructor(value) {
    this.value = value;
    this._usesCount = 0;
  }

  increaseUsesCount() {
    ++this._usesCount;
  }

}

module.exports.CacheItemModel = CacheItemModel;
