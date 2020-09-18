// Custom Types in Typescript code written by Sriram Srinivasan on 03/09/2019

/*Custom Types can be created in Typescript. It is used to give readability and and clean 
structure to your code.  */

//We create an interface that is nothing but a custom type for a Customer
interface Customer {
  customerName: String;
  customerAge: String;
  customerEmail: String;
}

//In the function below we pass this Customer type as a variable.
let customerMessage = (customer: Customer) => {
  let str =
    "Hello " +
    customer.customerName +
    " Your details are as follows: " +
    " Your age: " +
    customer.customerAge +
    " and Your Email is: " +
    customer.customerEmail;
  return str;
};

console.log(
  customerMessage({
    customerName: "Sriram",
    customerAge: "46",
    customerEmail: "sriram@sriraminc.com"
  })
);
