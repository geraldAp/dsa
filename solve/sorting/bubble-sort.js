const input = [85, 72, 90, 65, 88, 95, 78, 82];

const bubbleSort = (arr) => {
  const n = arr.length;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort(input));
