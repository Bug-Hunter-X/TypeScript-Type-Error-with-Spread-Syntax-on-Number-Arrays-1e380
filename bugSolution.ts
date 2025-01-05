function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2] as number[];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = combine(arr1, arr2); 
console.log(combinedArr); // Prints [1, 2, 3, 4, 5, 6] 