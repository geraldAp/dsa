// write a function to sort the giving array in ascending order

// input [24,1,6,37,56,25] output [1,6,24,25,36,57]

function insertionSort(arr) {
  n = arr.length;

  for (i = 1; i < n; i++) {
    current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr
}

console.log(insertionSort([24,'boy','dog', 1, 6, 37, 56, 25]));
