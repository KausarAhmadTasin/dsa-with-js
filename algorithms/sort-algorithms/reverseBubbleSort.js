function reverveBubbleSort(arr) {
  let swapped;
  let n = arr.length;

  do {
    swapped = false;

    for (let i = 0; i < n; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      swapped = true;
    }
    n--;
  } while (swapped);

  return arr;
}

console.log(reverveBubbleSort([4, 2, 9, -5, 6, 36]));
