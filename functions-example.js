//calculate the product of two numbers, and return the result
let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

console.log(x);


//convert fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

console.log(toCelsius(68));
