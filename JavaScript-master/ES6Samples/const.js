//Const keyword sample in ES6.
//Written by Sriram Srinivasan on 20/04/2020

const pi = 3.142; // declare constant variable pi

//Create a function to calculate area

function calculateArea(radius) {
  // This constant variable with same name as the above one is allowed because, this variable is in local scope
  // to this funciton.
  const pi = 10;
  return pi * radius * radius;
}

// This will display the value it got assinged 3.142, because this variable is in global scope.
console.log(pi);

// call the function calculate area and print the resulting output.
console.log(calculateArea(5));
