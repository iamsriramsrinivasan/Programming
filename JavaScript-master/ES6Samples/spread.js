//Spread  sample in ES6.
//Written by Sriram Srinivasan on 21/04/2020

/*Spread operator let's an array to be taken out and listed as an individual items. */
var nums = [1, 2, 3];

//This will print nums array content as individual elements.
console.log(...nums);

//We can merge two arrays using spread operator very easily
//This will merge the first array into the anotherNums array
var anotherNums = [...nums, 4, 5, 6];

console.log(anotherNums);

//We can pass an array as a function argument when individual elements are requested
function addNums(a, b, c) {
  return a + b + c;
}

console.log(addNums(...nums));
