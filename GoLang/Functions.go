package main

import (
	"fmt"
	"strconv"
)

//Functions in Go are typically the same like other languages with few changes.
// 1. Parameters in a function, if they are of same type, you can add comma in between them and add teh
// data type to the last paramter as given in the example below
// We can return single or multiple values as part of our function.
// In case we don't need a value that is returned from a funcion, we can use the "_" notation which will
// tell Go compiler to ignore that value returned from the function.

func main() {

	fmt.Println(createMessage("Sriram", "Srinivasan", 47))

	message, err := multiReturnValues("Sriram", "Srinivasan", 47)
	fmt.Println(message, err)

	message1, _ := multiReturnValues("Sriram", "Srinivasan", 47)
	fmt.Println(message1)
}

func createMessage(firstName, secondName string, age int) string {
	return firstName + " " + secondName + " " + strconv.Itoa(age)
}

func multiReturnValues(firstName, secondName string, age int) (string, error) {
	return firstName + " " + secondName + " " + strconv.Itoa(age), nil
}
