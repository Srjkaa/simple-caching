const { Cache } = require('./Cache');
const { calculateTriangleArea } = require('./calculateTriangleArea');
const { encode } = require('./encode');

function getTriangleArea(firstSide, secondSide, thirdSide) {
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
