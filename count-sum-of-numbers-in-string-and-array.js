//count sum of numbers in string
const str = '123456';

let arrString = str.split('').map(Number).reduce(((a, b) => a + b), 0);
console.log(arrString)

//count sum of numbers in array
const numbers = [1.25, 2, 3.3, 4, 5.7, 6];

function sum(arr){
  return arr.reduce((a, b) => a + b)
}

console.log(sum(numbers));

//count sum of digits in numbers

const num = 123456;

function returnRes(abv){
  return String(abv)
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);
}

console.log(returnRes(num))










