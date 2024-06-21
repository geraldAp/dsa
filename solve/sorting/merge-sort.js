const input = [85, 72, 90, 65, 88, 95, 78, 82];

const mergeSort = (unsortedArr) => {
  const n = unsortedArr.length;
  // check if array is already sorted.

  if (n <= 1) {
    return unsortedArr;
  }

  // divide and conquer
  const middle = Math.floor(unsortedArr.length / 2);

  const left = mergeSort(unsortedArr.slice(0, middle));
  const right = mergeSort(unsortedArr.slice(middle));

  return merger(left, right);
};

const merger = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;
  const mergedArr = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    mergedArr.push(left[leftIndex]);
    leftIndex ++
  }
  while (rightIndex < right.length) {
    mergedArr.push(right[rightIndex]);
    rightIndex ++
  }

  return mergedArr;
};

console.log(mergeSort(input));
