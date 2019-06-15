
module.exports.calculateTriangleArea = function(firstSide, secondSide, thirdSide) {
  const semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
  return Math.sqrt(
    semiPerimeter * (semiPerimeter - firstSide) * (semiPerimeter - secondSide) * (semiPerimeter - thirdSide)
  );
};
