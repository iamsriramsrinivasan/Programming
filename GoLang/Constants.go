package main

import "fmt"

func main() {

	//Const variables in go needs to be initialized upfront, as you cannot change the variable later, this has to be done first.
	const value int = 10
	fmt.Println(value)

	//If you don't care about the value a const holds, then you can have implicit const variable
	//Go compiler figures the underlying type and creates this variable. Its better to use expilicit
	//type declaration as I have done above to be very clear on our intention.
	const someValue = 10
	fmt.Println(someValue)

}
