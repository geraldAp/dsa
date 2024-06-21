const input = [
  "monkey",
  "tiger",
  "umbrella",
  "zoo",
  "bee",
  "dog",
  "apple",
  "mac",
  "kangaroo",
];

const merge = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;
  const resultArray = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(left[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    mergedArr.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    mergedArr.push(right[rightIndex]);
    rightIndex++;
  }
  return resultArray;
};

const sortMerge = (unsortedArr) => {
  // first condition check if array is empty or has only one element
  if (unsortedArr.length <= 1) {
    return unsortedArr;
  }

  //   divide the array into two so baasically divide and conquer
  const middle = Math.floor(unsortedArr.length / 2);
  const left = unsortedArr.slice(0, middle);
  const right = unsortedArr.slice(middle);
  //   console.log('left',left)
  //   console.log('right',right)
  return merge(sortMerge(left), sortMerge(right));
};

console.log(sortMerge(input));
