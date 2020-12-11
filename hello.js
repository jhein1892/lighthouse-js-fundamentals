const sayHello = function(name) {
  console.log("Hello, " + name);
}
sayHello('Gabby');

// console.log

const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}

sayHelloToConsole('Jake'); 

// return

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');
console.log(greeting);