//Let keyword sample in ES6.
//Written by Sriram Srinivasan on 01/09/2019

/* In JavaScript when you declare a variable with 'var' it takes 
a global scope, so if you assign that variable in a local scope,
still the value changes at global scope as that variable is available
the entire script. To avoid this and declare a variable with 'let' 
keyword, then, that variable will have a local scope. If you you want 
a variable in Javascript with local scope, then you should declare with 
'let' keyword. */

var globalVariable = 10;

if (globalVariable > 5) {
  globalVariable = 11;
  // this statement will output value 11 as globalVariable is truely global now.
  console.log(globalVariable);
}

//Let version of this condition

if (globalVariable > 5) {
  let globalVariable = 8;
  console.log(globalVariable); // this statement will output value 9.
}

// this will output vlaue 11 as this is still a global variable that got assigned value 11 previously
console.log(globalVariable);
