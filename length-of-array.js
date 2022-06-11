const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

//function
function countLength(arr){
    return arr.length
}

console.log(countLength(fruits))

//arrow function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];

const arrayLength = b => b.length;
console.log(arrayLength(numbers));