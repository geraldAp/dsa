// write a function to sort the giving array in ascending order
// input [24,1,6,37,56,25] output [1,6,24,25,36,57]

function selectionSort(arr) {
  n = arr.length;

  for (i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (arr[i] !== arr[minIndex]) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([24, 1, 6, 37, 56, 25]));
