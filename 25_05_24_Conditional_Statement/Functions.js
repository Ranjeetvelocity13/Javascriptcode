//A function is a resuable block of code design to perform a particulat task
SyntaxError
// function functionName(parmaeter{
//     //code to be executed
// }

//Without parameter
function greet(){
    console.log("Hi ,Javascript")
}
greet();  //Calling the fucntion


//Function with paramter
function student(name){
    console.log("Hello, "+name+"   ! welcome to the javascript class.")
}
student("Rohit");

//Function with retrun value

function add(a,b){
    return a+b;
}
let sum1 = add(4,6);
console.log(sum1)


function substraction(a,b){
    return a-b;
}

let sub = substraction(10,5)
console.log(sub);

//
function divide(a,b){
    if(b !== 0){
    return a/b;
    }
    else{
     return "Cannot divide by zero"
}
}

let div = divide(4,0);
console.log(div)