let str = "I'm am string"

// length of string
let len = str.length;
console.log(len)

// sliced method

let slicedArr = str.slice(2, 10);
console.log(slicedArr);

//replace method

let replaceStr = str.replace("am", "was");
console.log(replaceStr)

//upper case

let upperCase = str.toUpperCase();
console.log(upperCase);

// lower case

let lowercase = str.toLowerCase();
console.log(lowercase);

//concanate

let first = "Aky";
let sec = " Skyer"
let fullName = first.concat(sec);
console.log(fullName)

//or

console.log(first + sec)

// to use any method just write variable and put (.)

// eg ------>>>>>>>> str.

// var and let---->>> var is so weak u csn declare 2 variable to it and it will change to the latest.. you might accidentally overwrite a variable that you did not intend to
var catName = "nini";
var catName = "meow";
console.log(catName);

//but let don't let u u do it.. ES6
let catSound = "grrrr";
//let catSound = "meooooowwww";
console.log(catSound);

// then there comes "const" keyword which only let you  read-only.

const myName = "Skyer";
const myStr = "My name is " + myName + " and I am well";
console.log(myStr)