const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14];
const arr4 = ['apple', 'orange', 'mango'];

//function to merge arrays with for loop
function mergeArrays(first, second){
    
  for(let i = 0; i < second.length; i++){
    first.push(second[i])
  }
  
  return first;
}

console.log(mergeArrays(arr1, arr2));

//concat arrow function
const mergeArrays2 = (a, b) => a.concat(b);
console.log(mergeArrays2(arr1, arr2));

//concat several arrays with different data types
const mergedConcat = [].concat(arr1, arr2, arr3, arr4);
console.log(mergedConcat);

//merge arrays using spread operator
const merged = [...arr1, ...arr2, ...arr3];
console.log(merged);



