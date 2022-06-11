const numbers = [9, 4, 2, 8, 0, 3, 1, 5, 7, 2, 5, 0, 11];

//sort array from 0 to 9 in ASC order as strings
// result: [ 0, 0, 1, 11, 2, 2, 3, 4, 5, 5, 7, 8, 9 ]
const sortedASC = numbers.sort();
console.log(sortedASC); 

//sort array in DESC order as strings
//result: [ 9, 8, 7, 5, 5, 4, 3, 2, 2, 11, 1, 0, 0 ]
const sortedDESC = numbers.reverse();
console.log(sortedDESC);

//sort strings in array in ASC order
//result: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortedStringsASC = fruits.sort();
console.log(sortedStringsASC);

//sort strings in array in DESC order
//result: [ 'Orange', 'Mango', 'Banana', 'Apple' ]
const sortedStringsDESC = fruits.reverse();
console.log(sortedStringsDESC);

//sort numbers in array as numbers in ASC order
//result: [ 0, 0, 1, 2, 2, 3, 4, 5, 5, 7, 8, 9, 11 ]
const sortedNumbersASC = numbers.sort((a, b) => a - b);
console.log(sortedNumbersASC);

//sort numbers in array as numbers in DESC order
//result: [ 11, 9, 8, 7, 5, 5, 4, 3, 2, 2, 1, 0, 0 ]
const sortedNumbersDESC = numbers.sort((a, b) => b - a);
console.log(sortedNumbersDESC);

//function sort numbers in ASC order
//result: [ 1, 5, 10, 25, 40, 100 ]
const points = [40, 100, 1, 5, 25, 10];

function sortASC(arr){
    return arr.sort((a, b) => a - b)
}

console.log(sortASC(points));

//arrow function for sort numbers array in ASC order
//result: [ 1, 5, 10, 25, 40, 100 ]
const sortASCNumbers = arr1 => arr1.sort((a, b) => a - b);
console.log(sortASCNumbers(points));

//function sort numbers in DESC order
//result:[ 100, 40, 25, 10, 5, 1 ]
function sortDESCNumbers(arr2){
    return arr2.sort((a, b) => b - a);
}
console.log(sortDESCNumbers(points))

//arrow function for sort numbers array in DESC order
//result: [ 100, 40, 25, 10, 5, 1 ]
const sortDESC = arr3 => arr3.sort((a, b) => b-a);
console.log(sortDESC(points));


// return the lowest number in array
//result: 1
const lowestNumber = arr4 => arr4.sort((a, b) => a - b);
const lowestPoints = lowestNumber(points);
let lowest = points[0];
console.log(lowest);


// return the highest number in array
//result: 100
const highestNumber = arr5 => arr5.sort((a, b) => b - a);
const highestPoints = highestNumber(points);
let highest = points[0]
console.log(highest);

// return the highest number in array #2
//result: 100
points.sort(function(a, b){return a-b});
let highest1 = points[points.length-1];
console.log(highest1);
console.log(points.length)