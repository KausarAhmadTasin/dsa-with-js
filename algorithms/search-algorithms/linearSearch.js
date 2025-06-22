function linearSearch(target, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }

  return NaN;
}

console.log(linearSearch(36, [1, 2, 3, 4, 5, 6]));
