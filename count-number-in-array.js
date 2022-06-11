const result = [1, 1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3];

//function #1
function countNumbers(arr){
  let count = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1){ 
      count ++
    }
  }
  return count
}

console.log(countNumbers(result));

//function #2
const r = result.filter(j => j === 2).length;
console.log('number of the found elements: ' + r);