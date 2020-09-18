package main

import "fmt"

func main() {

	//Map is a key value pair data structure. You can add, modify and delete data from a map as demonstrated below.

	myMap := map[string]int{"age": 47}
	fmt.Println(myMap)
	fmt.Println(myMap["age"])

	myMap["age"] = 37
	fmt.Println(myMap)

	delete(myMap, "age")
	fmt.Println(myMap)
}
