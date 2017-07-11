// write a function that takes in three parameters and returns the sum of those three parameters

function sum(a,b,c) {
	console.log(a + b + c);
}

sum(5,5,5);
sum(-5,5,5);


console.log("//////////////////////////////////////////////////////////////////")
// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function lastLetter (string) {
	console.log(string[string.length-1]);
}

lastLetter("humbug")
lastLetter("cherry pie")

console.log("//////////////////////////////////////////////////////////////////")
// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function cube(a) {
	console.log(Math.pow(a, 3));
}

cube(3);
cube(4);

console.log("//////////////////////////////////////////////////////////////////")
// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function reverseString (string) {
	var word = ""
	for (var i=string.length-1; i>-1; i--) {
		word = word += string[i];
	}	console.log(word);
} 

reverseString("Apple pie is great");
reverseString("rubberball");

console.log("//////////////////////////////////////////////////////////////////")
// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

function arrayToObject (array1, array2) {
	var object= {};
	for (var i=0; i < array1.length; i++) {
		object[array1[i]] = array2[i];		
	} 
	console.log(object);
}

arrayToObject(["exciting", "exotic"], ["markets", "britain"])
arrayToObject(["a", "b", "c"], ["x", "y", "z"]);

//element[ yourKey ] = yourValue;, or obj["key3"] = "value3"; or obj.key3 = "value3";

console.log("//////////////////////////////////////////////////////////////////")
// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

function objectToArray (object) {
	
	var array = [];
	var array2 = [];
	for (var keys in object) {
		array.push(keys);
		array2.push(object[keys]);	
	}

	var objectArray = {
		keys: array,
		values: array2,
	}
	console.log(objectArray);
}

objectToArray({ exciting: "markets", exotic: "britain" });
objectToArray({ a: "x", b: "y", c: "z" });

//for(var objectProperty in food) console.log("the property key is: " + objectProperty);console.log("the value of that property is: " + food[objectProperty])
console.log("//////////////////////////////////////////////////////////////////")
// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

function compute(x,n) {
	var i=1;
	var z = x
	while (i < n) {
		z = z * x
		i++
		
	}console.log(z)
}

compute(2,3); //expected answer 8
compute(3,10); //expected answer 59049

console.log("//////////////////////////////////////////////////////////////////")
// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

