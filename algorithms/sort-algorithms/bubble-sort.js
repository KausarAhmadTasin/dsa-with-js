function bubbleSort(arr) {
  let swapped;
  let n = arr.length;

  do {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}

console.log(bubbleSort([4, 2, 9, -5, 6, 36]));

/* 
  ## n--

 * Each pass in bubble sort pushes the largest remaining element to the end of the array (like a bubble floating up).

 * After 1st pass: the last element is guaranteed sorted.

 * After 2nd pass: the last 2 elements are sorted.

 * So, no need to check those again.

 That’s why we decrease n each time — we shrink the "unsorted portion" of the array.
*/
