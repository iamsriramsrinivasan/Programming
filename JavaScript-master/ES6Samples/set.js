//Set sample in ES6.
//Written by Sriram Srinivasan on 21/04/2020

/* Set is a data structure that eleminates duplicates*/
var sampleSet = new Set();
//Set Operations
sampleSet.add("sriram").add("sriraminc"); // You can chain this method because what it returns is a set

console.log(sampleSet);
console.log(sampleSet.size); //know the size of the set

//if the element is there it will delete and return true else returns false. So you cannot
//chain delete method as we did for add.
sampleSet.delete("sometext");

//delete everything from the set in one step
sampleSet.clear();

/*Now we will see how set helps us to remove duplicates from arrays.
There might be arrays you will be having with n number of elements. 
To see whether duplicates are there are not will be very difficult. 
This is where a Set helps */

var myArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];

var mySet = new Set(myArray); // create a set from an array

console.log(mySet); // all values will be unique.

//Now you want to convert this set into an array for proccessing.
//This is where the spread operator comes to help.

var uniqueArray = [...mySet];

console.log(uniqueArray); // our array with unique values converted from a set.
