//1. if satement 
//Run a block of code if a condtion is true
let age = 18

if (age >=18){ // true
 console.log("Yor are eligible to vote");
}

let age1 = 15

if (age1 >=18){ // false
 console.log("Yor are eligible to vote");
}

//if else 
let age2 =16

if (age2 >= 18){  //
    console.log("you can vote")
}
else{
    console.log("Yoe are to young to vote")
}

//if ..else if .. elseladder

let marks  = 85

if(marks >= 90){    //False
    console.log("Grade :A")
}
else if(marks >= 75){  //True
       console.log("Grade :B")
}
else if(marks >= 60){
   console.log("Grade :C")
}
else{
    console.log("Grade :D")
}


// Switch satetemnt

let day = 2

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        
}


// Check if a number is postivie ,negative or zero

let  num = 0;

if (num >0){
    console.log("Positive number")
}
else if(num < 0){
    console.log("Negative number")
}
else{
    console.log("Zero")
}

//check if a number os even or odd

let numebr = 8
if (numebr %2 === 0){  //1 false true
    console.log("Even");
}
else{
    console.log("Odd");
}


let Age = 16
let message  = (Age >= 18) ? "Eligible for vote" : "Not Eligible for vote"
console.log(message)

//Check largest of two number 

let a =10, b = 20

if (a >b){//false
    console.log("a is grater")
}
else{
    console.log("b is greater")
}

//check leap 
let year = 2025


if ((year % 4 === 0 && year %100 !== 0) || (year % 400 === 0)){ //True
    console.log("Leap year")
}
else{
    console.log("Not leap year")
}


//Check charac is vowel
let ch = 'Z';
if(ch =='a' || ch=='e'|| ch== 'i'|| ch=='o' || ch =='u') {
   console.log("Vowel")
}
else{
    console.log("Consonant")
}

//
// for (initizlization; cons : inc/dec){

//     //code to executed
// }

for (let i = 1; i<=10 ;i++){
    console.log(i);
}

let number = 13;
let isPrime = true;

if (number < 2) isPrime = false;
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Prime" : "Not Prime");
