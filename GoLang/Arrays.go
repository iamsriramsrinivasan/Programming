package main

import "fmt"

func main() {

	//Go arrays are data structure that contains similar data types.

	var numArray [3]int
	numArray[0] = 1
	numArray[1] = 2
	numArray[2] = 3

	fmt.Println(numArray)
	fmt.Println(numArray[1])

	//There is a implicit declaration and initialization for arrays with the same clarity as above

	anotherArray := [3]int{1, 2, 3}

	fmt.Println(anotherArray)

}
