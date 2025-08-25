function recursiveBinarySearch(arr, target) {
  if (arr.length === 0) return -1;

  const middleIndex = Math.floor(arr.length / 2);

  if (arr[middleIndex] === target) return middleIndex;

  if (target > arr[middleIndex]) {
    return recursiveBinarySearch(arr.slice(middleIndex + 1), target);
  }

  return recursiveBinarySearch(arr.slice(0, middleIndex - 1), target);
}

console.log(recursiveBinarySearch([-5, 2, 3, 4, 7, 13], 13));
console.log(recursiveBinarySearch([-5, 2, 3, 4, 7, 13], 7));
console.log(recursiveBinarySearch([-5, 2, 3, 4, 7, 13], 90));
