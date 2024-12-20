//Question 01

var myName = "Kamal";
console.log("Hello", myName + "!");

//Question 02

var a = 5;
var b = 10;
var sum = a + b;
console.log(sum);

//Question 03

var age = 30;
console.log("My age is", age);

//Question 04

var math = 80;
var english = 70;
var physics = 60;

var totalMarks = math + english + physics;
var average = totalMarks / 3;
console.log(totalMarks);

console.log(average);

//Question 05

var sLanguage = "HTML";
var cssLanguage = "CSS";

console.log(sLanguage + "&" + cssLanguage);
var p_language = "JavaScript";
var core_language = "C";

console.log(p_language + "&" + core_language);


//Basic Questions related to String Methods
//Question 01

let sentence = "Hello, how are you today?";
let search = sentence.search("Hello");

console.log(search);

if (search == 0) {
  console.log("Hello has been found!");
}else {
  console.log("Hello has not been found!");
}

//Question 02

let greeting = "Hello";
let userName = prompt("Enter your name");

console.log(greeting + "," + " " + userName.Rana());

//Questions 03 

let user = "Kamal";
let pLanguage = "JavaScript";
let year = 2018;

let output = `${user}, you have been coding in ${pLanguage} since ${year}. `;

console.log(output);