const input = [85, 72, 90, 65, 88, 95, 78, 82];

const insertionSort = (arr) => {
  n = arr.length;

  for (i = 1; i < n; i++) {
    let current = arr[i];
    j = i - 1;
    
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

console.log(insertionSort(input));
