//✅ 1. Function Declaration
function greet() {
  return "Hello!";
}

function add(a, b) {
  return a + b;
}

function multiply(x, y) {
  return x * y;
}

function isEven(n) {
  return n % 2 === 0;
}

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function getFullName(first, last) {
  return `${first} ${last}`
}

function isAdult(age) {
  return age >= 18;
}

function factorial(n) {
  let result = 1;
  for(let i = 2; i <= n; i++) result *= i;
  return result;
}

function welcomeUser(name) {
  return "Welcome",`${name}`;
}

console.log(greet());                 // Output: "Hello!"

console.log(add(5, 3));              // Output: 8

console.log(multiply(4, 6));         // Output: 24

console.log(isEven(10));             // Output: true
console.log(isEven(7));              // Output: false

console.log(square(5));              // Output: 25

console.log(cube(3));                // Output: 27

console.log(getFullName("John", "Doe"));  // Output: "John Doe"

console.log(isAdult(20));            // Output: true
console.log(isAdult(16));            // Output: false

console.log(factorial(5));           // Output: 120

console.log(welcomeUser("Alice"));   // Output: ", Alice"


// ✅ 2. Function Expressions
const sayHi = function() {
  return "Hi!";
};

const subtract = function(a, b) {
  return a - b;
};

const divide = function(x, y) {
  return x / y;
};

const isOdd = function(n) {
  return n % 2 !== 0;
};

const reverseString = function(str) {
  return str.split('').reverse().join('');
};

const absolute = function(n) {
  return Math.abs(n);
};

const greetUser = function(name) {
  return `Hello, ${name}!`;
};

const min = function(a, b) {
  return Math.min(a, b);
};

const max = function(a, b) {
  return Math.max(a, b);
};

const toLower = function(str) {
  return str.toLowerCase();
};

console.log(sayHi());              // Output: "Hi!"

console.log(subtract(10, 4));     // Output: 6

console.log(divide(20, 5));       // Output: 4

console.log(isOdd(7));             // Output: true

console.log(reverseString("hello"));  // Output: "olleh"

console.log(absolute(-42));        // Output: 42

console.log(greetUser("Ranjeet")); // Output: "Hello, Ranjeet!"

console.log(min(3, 7));            // Output: 3

console.log(max(3, 7));            // Output: 7

console.log(toLower("HELLO"));     // Output: "hello"

function testAll() {
  console.log(sayHi());
  console.log(subtract(10, 4));
  console.log(divide(20, 5));
  console.log(isOdd(7));
  console.log(reverseString("hello"));
  console.log(absolute(-42));
  console.log(greetUser("Ranjeet"));
  console.log(min(3, 7));
  console.log(max(3, 7));
  console.log(toLower("HELLO"));
}

testAll();

// ✅ 3. Arrow Functions
const hello = () => "Hello!";
const double = n => n * 2;
const triple = n => n * 3;
const greetArrow = name => `Hi, ${name}`;
const toUpper = str => str.toUpperCase();
const squareArrow = n => n ** 2;
const isPositive = n => n > 0;
const isNegative = n => n < 0;
const lengthOfString = str => str.length;
const startsWithA = str => str.startsWith("A");

console.log(hello());               // "Hello!"

console.log(double(5));             // 10

console.log(triple(4));             // 12

console.log(greetArrow("Ranjeet")); // "Hi, Ranjeet"

console.log(toUpper("hello"));      // "HELLO"

console.log(squareArrow(6));        // 36

console.log(isPositive(3));         // true

console.log(isNegative(-1));        // true

console.log(lengthOfString("test")); // 4

console.log(startsWithA("Apple"));   // true
console.log(startsWithA("Banana"));  // false

// ✅ 4. Anonymous Functions
setTimeout(function() {
  console.log("Timeout executed");
}, 1000);

[1, 2, 3].forEach(function(n) {
  console.log(n);
});

let anonMultiply = function(a, b) {
  return a * b;
};

let anonResult = (function(x, y) {
  return x + y;
})(5, 10);

let list = ["a", "b", "c"].map(function(char) {
  return char.toUpperCase();
});

let buttonClick = function() {
  console.log("Button clicked");
};


let doubleArray = [1, 2, 3].map(function(n) { return n * 2; });

let anonGreeting = function(name) { return `Hi, ${name}`; };

let anonUpper = function(str) { return str.toUpperCase(); };

console.log(anonMultiply(4, 5));
console.log(anonResult);
console.log(list);
buttonClick();
console.log(doubleArray);
console.log(anonGreeting("Ranjeet"));


// ✅ 5. IIFE (Immediately Invoked Function Expression)

(function() {
  console.log("IIFE #1 executed");
})();

(function(name) {
  console.log(`Hello, ${name}`);  // ✅ Fixed syntax
})("Ranjeet");

let iifeResult = (function(a, b) {
  return a + b;
})(2, 3);

let iifeValue = (() => "Arrow IIFE")();

(function() {
  let secret = 123;
  console.log("Secret is", secret);
})();

(() => {
  console.log("Short IIFE");
})();

(function(count) {
  for (let i = 1; i <= count; i++) console.log(i);
})(3);

(function(msg) {
  console.log(msg.toUpperCase());
})("hello");

(() => console.log("Single line IIFE"))();

(function() {
  console.log("IIFE #10 done");
})();


// ✅ 8. Async Functions
async function getMessage() {
  return "Hello async!";
}

async function getNumber() {
  return 42;
}

async function delayedHello() {
  await new Promise(res => setTimeout(res, 1000));
  return "After 1 sec";
}

async function getUser() {
  return { name: "Ranjeet", age: 25 };
}

async function asyncAdd(a, b) {
  return a + b;
}

async function fetchData() {
  return "Data fetched";
}

async function getName() {
  return "Name from async";
}

async function sayBye() {
  return "Bye from async";
}

async function squareAsync(n) {
  return n * n;
}

async function multiplyAsync(a, b) {
  return a * b;
}

getMessage().then(console.log);           // "Hello async!"
getNumber().then(console.log);            // 42
delayedHello().then(console.log);         // "After 1 sec"
getUser().then(console.log);              // { name: 'Ranjeet', age: 25 }
asyncAdd(5, 7).then(console.log);         // 12
fetchData().then(console.log);            // "Data fetched"
getName().then(console.log);              // "Name from async"
sayBye().then(console.log);               // "Bye from async"
squareAsync(6).then(console.log);         // 36
multiplyAsync(3, 4).then(console.log);    // 12

function validateLogin(username, password) {
  const validUser = "admin";
  const validPass = "12345";
  return username === validUser && password === validPass;
}

console.log(validateLogin("admin", "12345")); // true
console.log(validateLogin("user", "12345"));  // false
