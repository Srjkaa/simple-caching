const { Cache } = require('./Cache');
const { calculateTriangleArea } = require('./calculateTriangleArea');
const { encode } = require('./encode');
const { TriangleSidesValidator } = require('./validation/TriangleSidesValidator');
const { TriangleExistenceValidator } = require('./validation/TriangleExistenceValidator');

function getTriangleArea(firstSide, secondSide, thirdSide) {
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
    getTriangleArea.cache = new Cache(2000);
  }
  const { cache } = getTriangleArea;

  const uniqueKeyFromArguments = encode(`${firstSide}${secondSide}${thirdSide}`, 'base64');

  if (cache.has(uniqueKeyFromArguments)) {
    return cache.get(uniqueKeyFromArguments);
  }

  const area = calculateTriangleArea(firstSide, secondSide, thirdSide);
  cache.add(uniqueKeyFromArguments, area);
  return area;
}
