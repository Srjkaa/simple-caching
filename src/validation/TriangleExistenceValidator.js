
class TriangleExistenceValidator {

  static validate(side1, side2, side3) {
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
  }
}

// Imitate class static field
TriangleExistenceValidator.ERROR_MESSAGE = 'Triangle with such sides doesn\'t exists!';

module.exports.TriangleExistenceValidator = TriangleExistenceValidator;
