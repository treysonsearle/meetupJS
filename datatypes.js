//----Bits and bytes!----

//A bit is data stored as on or off
//1 and 0 represent On and Off and bit can only hold one value that is up to 1 in this case the 1 is on and zero is off

//Computers use strings of bits to represent data

//A byte is 8 bits but stores 64 times more data why is that?

//each time you add a bit you double the storage from before
//1 bits = 1 of values 2^0
//2 bits = 2 of values 2^1
//3 bits = 4 of values 2^2
//4 bits = 8 of values 2^3
//5 bits = 16 of value 2^4
//6 bits = 32 of value 2^5
//7 bits = 64 of value 2^6
//8 bits = 128 of value 2^7

//javascript uses a fixed number of bits 64 of them
//which is about value of 18 quintillion  which is more than we will ever need

//DataTypes --- What does the data hold?

/* --- computers use ones and zeros to show data but we need to see more 
as a developer and in our code. So how does one take binary and translate it
code? The answer is unicode. --- */

// link --- http://www.fileformat.info/info/charset/UTF-8/list.htm

//UTF/Unicode use hexadecimal to hold data. So a character like "?" is 3f in
// hexadeciaml and 111111 in binary. Which takes 6 bits to store that value.

//Numbers - Whole, decimals, negative, infinity, and NaN

number1 = 1; //is a number

//Strings - "This is a string"

string1 = "is a string"

//Unary Operators only take on value - typeof
//Binary take two values ("+, - , *, / , etc")
console.log(typeof 4.5)
    // number
console.log(typeof "x")
    // string
console.log(- (10 - 2))
    // -8

    // "-" can be both binary and unary

//Boolean - True and False


// types of comparisons > < >= <= !=  additional ways to flesh out  comparisons is || (or) && (and)
4 > 3 // true
4 < 3 // false
4 >= 3 // true
4 <= 3 // false
4 != 3 // true 
//you can also short circuit comparisons but using || and compares which is greater and outputs it

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

//"==" and "===" work similiar but "===" detects exactness and does not automatic type conversion

/* Automatic type conversion */

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

/* The difference between "==" and "===" */

console.log(1 == 1);
// expected output: true

console.log('1' == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log('1' === 1);
// expected output: false

//Empty values - Undefined and Null
//Null and undefined are pretty much the same.

/* In summary JavaScript has 4 different type of values mainly: numbers, 
strings, Booleans, and undefined values. */


// Program Structure

//Expressions and Statements

//Creating values are the main substance to programs but needs to be framed
//in a larger structure to be useful.

//Fragment of code is called an expression

2;
(2* 4);

//Bindings 

//How a program keeps an internal state?
//We use the reserved word or keyword "let" in javascript to bind or set variables

let number1 = 2;

//we can changer the variable number1 if we set it equal to another value;

let number1 = 2;
console.log(number1);
// 2
let number1 = 2;
number1 +  2;
console.log(number1);
// 2
let number1 = 2;
number1 = number1 +  2;
console.log(number1);
// 4

//A single let can define multiple bindings

let one = 1, two = 2;
console.log(one + two);
// → 3

//What can we name our variables in javascript?

/* Binding names can be any word. Digits can be part of binding 
names—catch22 is a valid name, for example—but the name must not
start with a digit. A binding name may include dollar signs ($) or 
underscores (_) but no other punctuation or special characters. */

// We use camalText to name variables normally

let bigCarShow = "1101 South Street";

//A collection of variable existing at a time is call the Environment

//An example is when a browser loads up there are functions loaded to detect user input

//Functions 

/* Executing a function is called invoking, calling, or applying it.
 You can call a function by putting parentheses after an expression that
produces a function value. */

console.log("Hello World");

// this gets logged onto the javascript console and it will display "Hello World"

prompt("Pick a number")

//prompt is another function in javascript that prompts the user to input something

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);

//using prompt and console.log helps bring our data to flow and be useful

//in javascript we are also given ways to compare and run code multiple times
//with out copy and pasting code.

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}

//Our last example was buggy and to fix this issue we compare and make sure 
// Our user inputed numbers only

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

//This is a step further and lets the user know that we need only a number

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

//Another route we can go is tell the user how large their input is

//Now how to we not repeat code?

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

// I really want to count by 2 and get to 12
//To do this we use loops

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

//This while loop will count by two and stop at 12

//Another Loop is the for loop

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }

//this is very similar and will do the same output as before

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }

// We also can break loops using the keyword break while using a condition like so

current = current + 1; current += 1; current++;
//these are the same


//if statements and switches

if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }

//Lastly its practice to comment your code so other can understand why and what you did.

// this is a comment on one line

/* this
   is
   a
   comment
   on
   multiple
   lines
    */
