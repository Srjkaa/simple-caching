const { Cache } = require('./Cache');
const { calculateTriangleArea } = require('./calculateTriangleArea');

function getTriangleArea(firstSide, secondSide, thirdSide) {
  if (!getTriangleArea.cache) {
    getTriangleArea.cache = new Cache(2000);
  }

  const { cache } = getTriangleArea;

  // TODO: implement 'unique key' formula
  const uniqueKeyFromArguments = `first:${firstSide},second:${secondSide},third:${thirdSide}`;

  if (cache.has(uniqueKeyFromArguments)) {
    return cache.get(uniqueKeyFromArguments);
  }

  const area = calculateTriangleArea(firstSide, secondSide, thirdSide);
  cache.add(uniqueKeyFromArguments, area);
  return area;
}
