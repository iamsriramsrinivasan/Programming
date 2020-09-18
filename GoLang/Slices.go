package main

import "fmt"

func main() {

	//Slice is similar to array but expandable. Slice is also very powerful in terms of
	//slicing and dicing data as we needed. What we see below is a typical declaration and initializing
	//of slices. Every slice has an array as it's internal representation. Hence if you create an array
	//and assign it to a slice, both will represent the same data.

	numArray := [3]int{1, 2, 3}

	slice := numArray

	fmt.Println(numArray)
	fmt.Println(slice)

	//This is more efficient declaration and initialization of a slice.

	slice1 := []int{1, 2, 3, 4}
	fmt.Println(slice1)

	slice1 = append(slice1, 10, 20)
	fmt.Println(slice1)

	s1 := slice1[1:]
	s2 := slice1[:2]
	s3 := slice1[1:2]

	fmt.Println(s1, s2, s3)

}
