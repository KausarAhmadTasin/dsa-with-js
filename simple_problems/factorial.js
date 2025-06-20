function findFactorial(num) {
  let factorial = 1;
  if (num < 0) return NaN;
  for (let i = num; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(findFactorial(-35670));
