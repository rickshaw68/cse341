// Comment
console.log('hello world');

// Variable declaration
let name = 'Rick';
console.log(name);
//names cannot be a reserved keyword
//names should be meaningful
//cannot start with a number
//cannot contain a space or hyphen
//are case sensitive

let firstName = 'Rick';
let lastName = 'Sanchez';

//use let for variables that will change
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//use const for variables that won't change
const birthYear = 1960;

//Primitive types: string, number, boolean, undefined, null
let name2 = 'Rick'; //string literal
let age = 57; //number literal
let isApproved = true; //boolean literal
let middleName = undefined; //undefined literal
let selectedColor = null; //null literal

//Reference types: object, array, function
let person ={
    name: 'Rick',
    age: 57
};

// Dot notation
person.name = 'Morty';  

// Bracket notation
person['name'] = 'Summer';

console.log (person.name);

// Arrays
let selectedColors = []; //array literal
let selectedColors2 = ['red', 'blue']; //array with initial values
selectedColors2[2] = 1; //arrays can hold different data types

console.log(selectedColors2.length) //length property

// Functions - perform a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Rick' , 'Shaw');

// Functions - calculate a value
function square(number) {
    return number + number;
}

let number = square(2);
console.log(number); //variable call
console.log(square(2)); //inline call
