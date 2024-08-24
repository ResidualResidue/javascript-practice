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

// var age = prompt("What is your age?");
// document.getElementById('header').innerHTML = age;
// function fun() {
//     console.log('this is a function');
// }


/* 
    say hello
*/
// function sayHello(age){
//     var name = prompt("What is your name?")
//     alert("Hello, "+ name + "! It is shocking you are "+ age+" years old!");
// }

// fun();
// sayHello(age);


// while loops
var num = 0;
while (num < 10){
    console.log(num);
    num++;
}

for(let i = 10; i < 20; i++){
    console.log(i);
}

//Data types

let age = 10; //number
let name = "bob"; //string
let info = {name: "einstein", age: 199}; //object
console.log(info);
let truth = false; //boolean
let groceries = ["apple", "bannana"]; //array
let random; //undefined
let nothing = null; //null


// STRINGS

let fruit = 'banana';
let morefruit ='apple\nbanana'; //newlines
console.log(morefruit);
console.log(morefruit.length);
console.log(morefruit.indexOf('\n'));
console.log(morefruit.indexOf('nan'));
console.log(morefruit.indexOf('x'));
console.log(fruit.slice(2,4));
console.log(fruit.replace('ban', '123'));
//Next 2 are the same thing
console.log(fruit.charAt(2));
console.log(fruit[2]);
let list = "1,2,3"
console.log(list.split(','));

// ARRAYS

let fruits = ['apple', 'banana', 'orange', 'pineapple'];
fruits = new Array('apple', 'banana', 'orange', 'pineapple');

console.log(fruits[1]);
fruits[0] = 'pear';
console.log(fruits)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(fruits.toString());
console.log(fruits.join(':'));
console.log(fruits.pop()); //remove last element
console.log(fruits.join(':'));

console.log(fruits.push('elderberry')); //Append to array
console.log(fruits.join(':'));

fruits.shift(); //remove first item
console.log(fruits.join(':'));
fruits.unshift('teehee'); //prepend to array
console.log(fruits.join(':'));

let vegetables = ['asperagus', 'tomatos'];

let all_groceries = fruits.concat(vegetables);
console.log(all_groceries.join(':'));
console.log(all_groceries.slice(1, 4));
console.log(all_groceries.reverse());

let somenumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(somenumbers.sort((a,b) => {
    return b-a;
}));

// OBJECTS

let student = {
    firstname: 'rafi',
    lastname: 'qazi',
    age: 25,
    weight: 180,
    studentInfo: function (){
        return "First Name: " + this.firstname + '\nLast Name: ' + this.lastname + '\nAge: ' + this.age + '\nWeight: ' + this.weight;
    }
};

console.log(student['firstname'] + ' ' + student.lastname);
console.log(student.studentInfo());

// IF ELSE SWITCH