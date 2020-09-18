//Let keyword sample in ES6.
//Written by Sriram Srinivasan on 01/09/2019

/*Default Parameters as the name suggests allows us to create functions with default values to the function
arguments. */

function addByTen(num = 10) {
  return num + 10;
}

console.log(addByTen(20)); // we give a parameter.

//in this call we don't give a parameter
console.log(addByTen());

//We can give default value to any number of function arguments.

function customerData(
  customerName = "NoNameCustomer",
  customerAge = "25",
  customerEmail = "noemail@domain.com"
) {
  console.log(
    "Customer name is: " +
      customerName +
      " Customer Age is: " +
      customerAge +
      " Customer Email is: " +
      customerEmail
  );
}

customerData(); //call with no parameters
customerData("Sriram", "46", "sriram@sriraminc.com"); //with values
