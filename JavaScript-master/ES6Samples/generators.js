//Generators sample in ES6.
//Written by Sriram Srinivasan on 21/04/2020

/*Generator functions return iterators for us to process data. This is very useful when doing 
async operations. Regarding async we will see in another series, but for now just understand how 
to write generators and operate on it. */

/*This is how you declare a generator function.
Yield keyword makes the cursor wait at the element
until the next() method is called again on that
generator. */
function* generatorFunc() {
  var x = yield "Sriram";
  var y = yield "Srinivasan";
  var z = yield "Sriram Inc";
  return "I am done";
}

myGen = generatorFunc();

/* First call will get the iterator object of the first element.
the second call will get the second iterator object and the 
sequence goes in that order. */
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
