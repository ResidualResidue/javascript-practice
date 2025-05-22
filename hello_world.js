console.log('Hello world, from a linked js file!'); // This is how we write comments.
/*
    Looks like multiline comments work the same as C.
*/

// We can do variables like this.
let x = 1;
let y = 'a';

console.log(y + x); // I think we call this weak typing?

x = 'b'; // This would make it dynamically typed.

console.log(x);

// Basic DOM manipulation.

document.getElementById('xss_vulnerable').innerHTML = "<img src=x onerror=alert(1) />"
document.getElementById('xss_safe').innerText = "<img src=x onerror=alert(1) />"

var age = prompt('What is your age?');

document.getElementById('age').innerText = "Your age: " + age;


/* 
    Data types
*/

var i = 0 // number
var j = 'stuff' // string
var k = {first: 'test', last: 'johnny'} // object
var l = ['1', 'f', 'v'] //array
var truth = true // boolean
var p; // undefined
var n = null; // null.