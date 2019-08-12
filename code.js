// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
    // var jane = "Hello, Jane!";

// function sayHello(str) {
//     return "Hello, Jane" === jane;
// }
// console.log(sayHello(jane));
//
// var alex = "Hello, Alex!";

function sayHello(input) {
    if (input === "alex") {
        return "Hello, Alex!"
    }else if(input === "pat") {
        return "Hello, Pat!"
    }else if(input === "jane") {
        return "Hello, Jane";
    } else {
        return "false";
    }
}
console.log(sayHello());
