//Template Strings sample in ES6.
//Written by Sriram Srinivasan on 21/04/2020

/*Template Strings provide an elegant way to embed strings in the code. Template 
Strings do not ignore whitespace or newline charater. You can give an expression 
in a template string and that will be evaluated. */
function customerDetails(customerName, customerAge, customerEmail) {
  return `Customer name is  ${customerName}  Customer Age is ${customerAge +
    10}  and Customer Email is ${customerEmail} `;
}

console.log(customerDetails("Sriram", 36, "sriram@sriraminc.com"));
