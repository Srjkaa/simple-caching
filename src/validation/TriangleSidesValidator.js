
class TriangleSidesValidator {

  static validate(...triangleSides) {
    return triangleSides.every(isSideValid);
  }
}

// Imitate class static field
TriangleSidesValidator.ERROR_MESSAGE = `Triangle sides should be greater than 0 and less than ${Number.MAX_SAFE_INTEGER}`;

function isSideValid(side) {
  return Boolean(side) && typeof side === 'number' && side >= 0 && side <= Number.MAX_SAFE_INTEGER;
}

module.exports.TriangleSidesValidator = TriangleSidesValidator;
