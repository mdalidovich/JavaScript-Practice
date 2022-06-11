const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//variables
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min);
console.log(max);


//arrow function
const findMin = arr1 => Math.min(...arr1);
const findMax = arr2 => Math.max(...arr2);

console.log(findMin(arr));
console.log(findMax(arr));

//functions

function minNumber(a){
  return Math.min(...a)
}
console.log(minNumber(arr));

function maxNumber(b){
  return Math.max(...b)
}
console.log(maxNumber(arr))