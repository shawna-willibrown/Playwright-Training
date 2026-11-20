//Question 1    
let value1 = 25;
let value2 = "JavaScript";
let value3 = true;
let value4 = undefined;
let value5 = null;
let value6 = 123.45;
let value7 = 12345678901234567890n;
let value8 = Symbol ("id");

console.log (value1, typeof value1);
console.log (value2, typeof value2);
console.log (value3, typeof value3);
console.log (value4, typeof value4);
console.log (value5, typeof value5);
console.log (value6, typeof value6);
console.log (value7, typeof value7);
console.log (value8, typeof value8);

//Question 2 
let name = "Bob Marley"; //string
let num = 60; //number
let option = true; //boolean
let undef = undefined; //undefined
let empty = null; //null
let largenumber =1234567899999999999n //BigInt;
let sym = Symbol ("Requestid"); //symbol
let person = { fname: "Bob", lname:"Marley" };

console.log (name); 
console.log (num);
console.log (option);
console.log (undef);
console.log (largenumber);
console.log (sym);
console.log (person);

/*Question 3

3. Predict the Output
Without running the code, predict the output:
console.log(typeof 100); number 
console.log(typeof "100"); string
console.log(typeof true);  boolean
console.log(typeof undefined); undefined
console.log(typeof null);      object
console.log(typeof 100n);      bigInt
*/

//Question 3b

console.log(typeof 100); 
console.log(typeof "100");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 100n);

//Question 4
let Studentname = "Shawna Brown" //String
let Studentage = 21 //num
let Studentpercentage = 90 //num
let Completedcourse = true //boolean 
let Studentgrade = "A" //string

/*
console.log (Studentname, typeof Studentname);
console.log (Studentage, typeof Studentage);
console.log (Studentpercentage, typeof Studentpercentage);
console.log (Completedcourse, typeof Completedcourse);
console.log (Studentgrade, typeof Studentgrade);
*/

// Question 5 - Create two variables:

let userName;
let userEmail = null;

console.log ("UserName is:",userName);
console.log (userName, typeof userName);

console.log ("User email is:", userEmail);
console.log (userEmail, typeof userEmail);

/* Question 5B

1. Undefined is when a variable is declared but not assigned a value such as userName variable above.
While null is a variable that is deliberately assigned an empty value.

2. It returns "undefined", the userName variable is undefined as it was not assigned a value.

3. It returns "null object" because the variable was assigned a null value.

4. This is because null represents the absence of a value but when used with typeof it becomes an object.     

*/


