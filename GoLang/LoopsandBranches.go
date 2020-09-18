package main

func main() {
	forLoop()
	println('\n')
	loopOverCollections()
	println('\n')
	ifStatements()
	println('\n')
	switchStatements()
}

//for loop in go
func forLoop() {
	for i := 0; i < 10; i++ {
		print(i)

		//break statement demo in case we need to get out of this loop
		if i == 6 {
			break
		}

		//continue statement demo in case we need to get out of current iteration and continue on the loop
		if i == 4 {
			continue
		}
	}

}

//this is how we loop over collections
func loopOverCollections() {

	slice := []int{1, 2, 3}

	for i := 0; i < len(slice); i++ {
		println(slice[i])
	}

	//another way to iterate using Range

	for i, v := range slice {
		println(i, v)
	}

	//Panic is a method that we can use to stop program execution when something goes wrong.

	//panic("This is a panic demo")
}

//Simple if branches, same as all other languages.
func ifStatements() {

	var trueorfalse bool = true

	if trueorfalse == true {
		println("true")
	} else if trueorfalse == false {
		println("false")
	} else {
		println("I don't know")
	}

}

//Switch statements are similar to other languages with few changes
//break statements are not mandatory to break out of statements
//there is a default case if the value given does not match any case.
func switchStatements() {

	var age int = 60

	switch age {
	case 20:
		println("young")
	case 30:
		println("not so young")
	case 40:
		println("greying hair")
	case 50:
		println("hairline going north")
	default:
		println("always young")
	}

}
