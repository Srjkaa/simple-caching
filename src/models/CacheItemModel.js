
class CacheItemModel {

  get usesCount() {
    return this._usesCount;
  }

  constructor(value) {
    this.value = value;
    this._usesCount = 1;
  }

  increaseUsesCount() {
    ++this._usesCount;
  }

}

module.exports.CacheItemModel = CacheItemModel;
