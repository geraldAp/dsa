function merge(leftArray, rightArray) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftArray.length) {
    mergedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArray.length) {
    mergedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }
  return mergedArray;
}

function mergeSortedArray(array1, array2) {
  const mergedArray = merge(array1, array2);

  return mergedArray;
}
const input1 = [0, 3, 4, 31];
const input2 = [4, 6, 30];

console.log(mergeSortedArray(input1, input2));
