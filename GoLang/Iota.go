package main

import "fmt"

//Const expressions are similar to const variables but here you are allowed to delcare and initialise a bunch of const
//variables. These are figured out at compiletime.
//iota is an initializer, that always starts from 0 and increments by 1. iota can be used to create a bunch of
//const variables using const expression. Iota can be used in operations like addition, multiplication, division etc.,
//The last variable "anotherThree will have a default value of 3 and when added with 6 results in output 9"
const (
	zero = iota
	first
	second
	third
)

const (
	anotherZero = iota
	anotherOne
	anotherTwo
	anotherThree = iota + 6
)

func main() {

	fmt.Println(zero, first, second, third)
	fmt.Println(anotherZero, anotherOne, anotherTwo, anotherThree)

}
