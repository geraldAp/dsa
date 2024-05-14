// write a function to sort the giving array in ascending order
// input [24,1,6,37,56,25] output [1,6,24,25,36,57]
// bubble sort straight forward but not the most efficient  since we have a loop in a loop

const bubbleSort = (arr) => {
  n = arr.length;
  console.log(arr);
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
        console.log(i)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log("swapped", arr,);
      }
    }
  }

  return arr;
};

console.log("done deal", bubbleSort([24, 1, 6, 37, 56, 25]));
