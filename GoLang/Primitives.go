package main

import "fmt"

func main() {

	//Go is strongly typed. This means at compiletime a variables type should be known.
	//Go supports the following primitive data types
	// int
	// float32, float64
	// String
	// Boolean
	// Complex - This to use math functions as a datatype
	// Real, Imaginery - real() and img() functions
	// Go is very strict. If you declare and initialize your variable but not use it anywhere
	// Go will issue a compiler error. The same goes to import statements.

	//Verbose way of declaring and initializing a variable
	var i int
	i = 10
	fmt.Println(i)

	//A little bit better way to declare and initialize a variable
	var f float64 = 10.0
	fmt.Println(f)

	//A shortcut but efficient way to declare and initialize a variable
	message := "Hello Folks"
	fmt.Println(message)

	//A boolean variable
	trueorfalse := true
	fmt.Println(trueorfalse)

	//Complex data type
	c := complex(1, 2)
	fmt.Println(c)

	//Real and Imaginery
	//Also, see you can declare and initialize multiple variables in this way.
	real, img := real(c), imag(c)
	fmt.Println(real, img)

}
