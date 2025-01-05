function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = combine(arr1, arr2); // Type error here
console.log(combinedArr); // Should print [1, 2, 3, 4, 5, 6]