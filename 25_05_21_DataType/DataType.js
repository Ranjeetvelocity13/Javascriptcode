// Data Types in javascript
// 1. Primitive data type
// 1. Number 
// 2.String
// 3.Boolean
// 4.undefine
// 5.null
// 6.Symbol

//Non primitive data Type
// 1.Object
// 2.Arrray
// 3.Function

//1. Number 
let age = 30
let num = 300
console.log(age)
console.log(num)

console.log(typeof(age))
console.log(typeof(num))

let test = 550.5;
console.log(test)
console.log(typeof(test))

//2. String 
//Java string  =  String s1 = "Javascript"

//Javascritp string

let Name1 = "Python"
let Name2  = 'Java'
let Name3 = `Javascript`

console.log(Name1)
console.log(typeof(Name1))  //String
console.log(Name2)
console.log(typeof(Name2))  //String
console.log(Name3)
console.log(typeof(Name3)) //String

//Boolean
let demo = true
let demo1 = false

console.log(demo)
console.log(typeof(demo)) //String
console.log(demo1)
console.log(typeof(demo1)) //String
// let demo2 = True

//Undefine

let undfine;
console.log(typeof(undfine))

// null
// let empvalue = null;
// console.log(typeof(empvalue));

let key = Symbol('key')
console.log(typeof(key))

//Non primitive dataType
//Object - coolection of key value paris
let person = {name : "Rohit",age :40};

//Array

let colour =['Red','Green','Blue']

//Funcion

function hello(){
    console.log("Hi Python")
}
hello();

//1. String 

let FirstName = "Virat12"
let LastName = "Patil";
let FullName = FirstName+" "+LastName
console.log(FullName);  //Op 

let  greeting3 = 'Hello, ${FirstName}';
console.log(greeting3);

let  greeting = `Hello, ${FirstName}`;
console.log(greeting);

let  greeting1 = `Hello, ${FullName}`;
console.log(greeting1);


// Number 

let score =  100
let avg  = 40.5;
let dicount =  0.2

console.log(score+ avg) //140.5
console.log(score*dicount) //

//boolean
let isTest = true;
let isTest22 =true;

console.log(isTest && isTest22);    //true  
console.log(isTest ||  isTest22)    //true  


let Phone;
console.log(Phone)

let address = null;
console.log(address)

let  symbol1 = Symbol("id")

if(isTest){

}


//Object

let Student = {name :"Amit",
    age  :22,
    number :true
};

console.log(Student.name)  //Amit
console.log(Student['age'])  //22

//Function

function mul(x,y){
    return x*y;
}

let result = mul(5,5);
console.log(result)

//Array
let col = ['Python','Java',"Javascript",10,20]
console.log(col[4])