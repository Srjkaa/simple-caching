const { Cache } = require('./caching/Cache');
const { calculateTriangleArea } = require('./calculateTriangleArea');
const { base64Encode } = require('./encoding/base64Encode');
const { TriangleSidesValidator } = require('./validation/TriangleSidesValidator');
const { TriangleExistenceValidator } = require('./validation/TriangleExistenceValidator');

function getTriangleArea(firstSide, secondSide, thirdSide, cacheSize = 2000) {
  try {
    if (!TriangleSidesValidator.validate(firstSide, secondSide, thirdSide)) {
      throw new RangeError(TriangleSidesValidator.ERROR_MESSAGE);
    }

    if (!TriangleExistenceValidator.validate(firstSide, secondSide, thirdSide)) {
      throw new RangeError(TriangleExistenceValidator.ERROR_MESSAGE);
    }
  } catch (error) {
    console.error(error.message);
    return error.name;
  }

  if (!getTriangleArea.cache) {
    getTriangleArea.cache = new Cache(cacheSize);
  }
  const { cache } = getTriangleArea;

  const uniqueKeyFromArguments = base64Encode(`${firstSide}${secondSide}${thirdSide}`);
  if (cache.has(uniqueKeyFromArguments)) {
    return cache.get(uniqueKeyFromArguments).value;
  }

  const area = calculateTriangleArea(firstSide, secondSide, thirdSide);
  cache.add(uniqueKeyFromArguments, area);
  return area;
}

module.exports.getTriangleArea = getTriangleArea;
