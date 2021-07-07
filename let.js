// let is block scoped.

let variable_name;

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x);
}
console.log(x);


for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// In ES5, you can fix this issue by creating another scope 
// so that each callback function references a new variable.
// And to create a new scope, you need to create a function.
for (var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, 1000);
    })(i);
}

// In ES6, the let keyword declares a new variable in each loop iteration.
//   Therefore, you just need to replace;
// the var keyword with the let keyword to fix the issue;

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// The var keyword allows you to redeclare a variable without any issue:
var counter = 0;
var counter;
console.log(counter); // 0

// However, redeclaring a variable using the let keyword will result in an error:
try {
    let counter = 0;
    let counter;
    console.log(counter);
} catch (e) {
    console.log(e);
}


// JavaScript let variables and hoisting
{
    console.log(counter); // 
    let counter = 10;
}
// In this example, accessing the counter variable before declaring;
// it causes a ReferenceError.;
// You may think that a variable declaration using;
// the let keyword does not hoist, but it does.

// In fact, the JavaScript engine will hoist a variable declared;
// by the let keyword to the top of the block.
// However, the JavaScript engine does not initialize the variable.
// Therefore, when you reference an uninitialized variable,
// you’ll get a ReferenceError.;