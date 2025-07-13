//1.function decalration
function greet(){
    return "Hello !"
}

console.log(greet());

function add(a, b){

    return a+b;
}
console.log(add(10,5)) //15

function mul(x,y){

    return x*y;
}
console.log(mul(10,5)) //15


function cube(n){

    return n*n*n
}
console.log(cube(5))


function getfull(first, last){

    return `${first} ${last}`
}
console.log(getfull("John", "Doe"))


function welcomeuser(name){
    return `Welcome ${name}`
}
console.log(welcomeuser("Rohit"))

//function expression
const SayHi = function(){

    return "Hi";
}

console.log(SayHi())

const sub = function(a,b){

    return a-b;
}
console.log(sub(10,5))  //5

const test = function (first, last){

    return `${first} ${last}`  
}
console.log(test("Virat", "Patil"))

const min = function(a,b){

    return Math.min(a,b);
}
console.log(min(10,5)) 

const Max = function(a,b){

    return Math.max(a,b);
}
console.log(Max(10,5)) 

//3 Arrow function

const hello = ()  => "Hello !"
console.log(hello())

const double = n => n *2;
console.log(double(5))

const triple = n => n*3;
console.log(triple(5))

const Test = name => `Hi, ${name}`
console.log(Test("Virat"))

//4.Anonymous Function

let Demo = function(x,y){

    return x+y
}
let Demo1 = function(x,y){

    return x*y
}
