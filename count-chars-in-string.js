//count number of chars in string(space included)
function charCount(str, el){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        
        if(str[i] = el) count ++;
    }
    return count;
}

console.log(charCount('Hello World', 'o'));

//count number of specific chars in string
function countLetters(str, letter){
    let count = 0;
    
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) === letter){
        count ++
      }
    }
    return count;
  }
  
  console.log(countLetters('Hello World', 'o'))
