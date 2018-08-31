module.exports.for = (n) => {
  let primeFactors = [];
  let factor = 2;
  while (n !== 1) {
    if (n % factor === 0) {
      primeFactors.push(factor);
      n /= factor;
    } else {
      factor++;
    }
  }
  return primeFactors;
};