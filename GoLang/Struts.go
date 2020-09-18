package main

import "fmt"

func main() {

	//Struts in go is a data structure that once delcared is fixed. This means you cannot extend a struct to add more variables to it.
	//Struts are initialised to the variables default value. We can create an instance of a struct and assign
	//values to the struct variables.

	type customer struct {
		ID           int
		customerName string
		customerAge  int
	}

	var cust customer
	cust.ID = 1
	cust.customerName = "Sriram"
	cust.customerAge = 47

	fmt.Println(cust)

	anotherCustomer := customer{ID: 2, customerName: "Srinivasan", customerAge: 37}
	fmt.Println(anotherCustomer)

}
