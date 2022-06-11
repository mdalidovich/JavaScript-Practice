//for loop w/o function
let arr = ['aa', 'bb', 'cc', 'dd', 'aa', 'cc', 'gg'];
let result = [];

for(let i = 0; i < arr.length; i++){
  if(result.indexOf(arr[i]) === -1){
    result.push(arr[i])
  }
}

console.log(result);

//function

function removeDuplicates(arr1){
  let answer = [];
  
  for(let j = 0; j < arr1.length; j++){
    if(answer.indexOf(arr1[j]) === -1){
      answer.push(arr1[j])
    }
  }
  return answer;  
}

console.log(removeDuplicates(arr));