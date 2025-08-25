function recursiveBinarySearch(arr, target, right = arr.length - 1, left = 0) {
  if (left > right) return -1;

  const middleIndex = Math.floor((left + right) / 2);

  if (arr[middleIndex] === target) return middleIndex;

  if (target > arr[middleIndex]) {
    return recursiveBinarySearch(arr, target, middleIndex + 1, left);
  }

  return recursiveBinarySearch(arr, target, right, middleIndex - 1);
}

console.log(recursiveBinarySearch([-5, 2, 3, 4, 7, 13], 13));
console.log(recursiveBinarySearch([-5, 2, 3, 4, 7, 13], 7));
console.log(recursiveBinarySearch([-5, 2, 3, 4, 7, 13], 90));
