/*
In Javascript, scope chain is an important concept that explains how your code
executes. In our sample below we have a variable "someVar" declared at various
places and we have two functions rootFun() and myFunc(). Let's see how these
are stacked in the scope chain of a JavaScript Engine
*/

/* 
When we execute this code Javascript engine will first create a global execution context and 
give it three things. A global object, this and an outer environment. In the global execution context
outer environment is nothing but the javascript engine. 

Code is read line by line and memory is allocated to functions and variables. Execution does not
start until the first execution code in our case  the initialization of someVar to 3 and in the 
next statement we execute the function myFunc(). Only if JS engine sees this statement that function 
will be executed or else all it does is recognises that a function is there and allocates memory to it. 

Now the action starts. 

1. rootFunc is executed, this means, an execution context is created for rootFunc. In this execution 
context it will also have the variable someVar with the value 2. rootFunc prints this variable and when
it reaches the statement myFunc(), then myFunc is executed and a separate execution context is created 
for myFunc. 

If you see myFunc also prints someVar, but there is no someVar variable declared and initialised on myFunc. 
According to scope chain rules, an execution contexts outer environment is decided by the lexical placement 
of the code. In myFunc case it is in global scope hence its outer environment is global exection context. 
At global execution context we have someVar declared and initialized to 3. 

So the execution engine will look at global execution context, finds someVar and uses that to print this value of 3.

If someVar is not at the global level, then variable not defined error will come. 

As the exectuion is done for myFunc, that execution context is destroyed. This happens in the last in first out 
basis. 

Key to remember here is this. Your code's lexical placement decides it's outer environment. 
*/
function myFunc() {
  console.log("myFunc Value: ", someVar);
}

function rootFunc() {
  var someVar = 2;
  console.log("rootFunc Value", someVar);
  myFunc();
}

var someVar = 3;
rootFunc();
