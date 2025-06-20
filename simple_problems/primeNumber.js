function findPrimeNumber(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(findPrimeNumber(17));
console.log(findPrimeNumber(10));
console.log(findPrimeNumber(2));
