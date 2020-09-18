//New String Methods sample in ES6.
//Written by Sriram Srinivasan on 02/09/2019

/*New String Methods in ES6. */

//repeat

var myName = "Sriram";
console.log(myName.repeat(5));

//startsWith

var word = "Welcome";
console.log(word.startsWith("Wel")); // Checks whether word starts with Wel and if yes, prints true
console.log(word.startsWith("come", 3)); // Checks whether word starts with come from 3rd position, and if yes, prints true

//endsWith
console.log(word.endsWith("come")); // Checks whether word ends with come and if yes, prints true
console.log(word.endsWith("W", word.length - 6)); // Checks whether word ends with Wel from 6th positon from the end, and if yes, prints true

//includes
var str = "My name is Sriram";
console.log(str.includes("Sriram")); //prints true if the str string has the word Sriram
