function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(6));
