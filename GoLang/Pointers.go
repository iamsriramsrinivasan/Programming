package main

import "fmt"

func main() {

	//If you come from C, C++ background you know how powerful a pointer is. Direct access to memory allocation, modification and
	//more. Go supports pointers to take advantage of this powerful programming feature. But, go is also responsible hence
	//doesnt allow pointer arithmetic, which is super powerful and can be easily misused.

	//this is how you declare and initialize a pointer variable. Remeber before you use your pointer variable
	//you need to allocate memory for that variable, hence new (string). If not runtime error will occur if you try
	//to use that variable.
	var message *string = new(string)
	fmt.Println(message)

	//We are saying, put this value "Hello Sriram" at the memory allocated for the variable message. This is called
	//dereferencing and * operator does that.
	*message = "Hello Sriram"
	fmt.Println(*message)

	//We can assign this pointer variable to create another pointer variable. What happens here is, both variables
	//point to the same memeory location so if we change value of one variable, the other one also gets the same
	//value.

	msgPtr := message
	fmt.Println(*msgPtr)

	*message = "This is a different message"
	fmt.Println(message, *message)
	fmt.Println(msgPtr, *msgPtr)

	// The & operator is the address of operator, through which we can assign the address of a variable
	// to another variable and both will point to the same address.
	firstName := "Sriram"
	fmt.Println(firstName)

	namePtr := &firstName
	fmt.Println(namePtr, *namePtr)

	firstName = "Srinivasan"
	fmt.Println(namePtr, *namePtr)

}
