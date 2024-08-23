console.log("Hello, world!");
//alert(1);

// variables

var v = "smoothie";

//console.log(a);
console.log(v);

/* Functions
1. Create
2. Call
*/

var age = prompt("What is your age?");
document.getElementById('header').innerHTML = age;
function fun() {
    console.log('this is a function');
}

/* 
    say hello
*/
function sayHello(age){
    var name = prompt("What is your name?")
    alert("Hello, "+ name + "! It is shocking you are "+ age+" years old!");
}

fun();
sayHello(age);