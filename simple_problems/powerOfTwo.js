function isPowerOfTwo(n) {
  for (let i = n; i <= n && i > 1; i = i / 2) {
    if (i % 2 !== 0) return false;
  }

  return true;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(144));

// better with while
function isPowerOfTwoWhileLoop(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }

  return true;
}

console.log(isPowerOfTwoWhileLoop(4));
console.log(isPowerOfTwoWhileLoop(5));
console.log(isPowerOfTwoWhileLoop(64));
