//Java  vs Javascript 

/*String is a primitive type
Immmutable 
 String s1 = null;
let  str  = null */

//What is astring in Javascript
//A string is a sequence of character elclosed in quotes

//Java
// String S1 = "Hello";
// let s = "Hello"
//Immmutable - menas once a string is created it can not be changes 
let s = "Hello";
s.concat("Hi");
console.log(s)

//String comparison
// .equals(s) 
// == 
// String s = "Hi" //SCP
// String s1 = new String("Hi");  //Heap + SCP
// SVGSymbolElement(s == s1) //false
// syso(s.equal(s1)) //true

let  a = 'ABC'
let b =  "ABC"

console.log(a == b)




let name  = "John";  //Double quotes
let city = 'Pune'   //Single quotes
let demo = `Hello`   ///Backticks 

//length
let name1  = "John";  // 4
console.log(name1.length) //4
console.log(demo.length)

//toUppercase() - convert to UPPERCASE
let name2  = "John";
console.log(name2.toUpperCase())

let name22 = "john";
console.log(name22.toUpperCase())

//toLowercase - convert to lowercase
let name23 = "JOHN";
console.log(name23.toLowerCase())

//charAt(index)   -  Retrun character at given index
let str2 = "Javascript"
console.log(str2.charAt(3)) ///a
console.log(str2.charAt(2)) ///a

//4. indexof  -  Finds index of first occurance 
//let str2 = "Javascaript"
console.log(str2.indexOf('a'))  //
console.log(str2.indexOf("p"))

//5.lastindecof - Finds last occurance idex

let  str3 = "Hello world Hi"
console.log(str3.lastIndexOf("Hi")) //

let  fruits  = "Apple,mango";
console.log(fruits.lastIndexOf("a"))


//inculdes  - check if substring is present
let Str3 = "Javascript"
console.log(Str3.includes("script"))  //true

console.log(Str3.includes("script1")) 

//startswith - check if string with asubstring
let Str33 = "Javascript"
console.log(Str33.startsWith("Java"))  //true
console.log(Str33.startsWith("PythonJava"))  //false

//endwith - check if string ends with a substring
let Str34 = "Hello world"
console.log(Str34.endsWith("Hello"))  //fasle
console.log(Str34.endsWith("world"))  //true


//slice(start,end)  - extract part of string ()
let Str35 = "Javascript"
console.log(Str35.slice(0,4))  //
console.log(Str35.slice(2,4))  //
console.log(Str35.slice(5))

//trim - remove spacrss from both side
let Str36 = "  Javascript     "
console.log(Str36.trim())
console.log(Str36.trimStart())
console.log(Str36.trimEnd())

//repalce  (old,new ) - replace first match

let S1 = "Hello World"
console.log(S1.replace("World", "Javascript"))


//repate(n) - repeats the string n time
let S2 = "Hi "
console.log(S2.repeat(5));


//Split(separator) - Split into an array

let S3 = "Apple,Banana,grap";
console.log(S3.split(',')); //[]

let S4 ="Hello World";
console.log(S4.split('e')); //[]

//concat - combain two string 
let S5  ="Python"
let S6 = "Java"
console.log(S5.concat(" ",S6))


//== vs ===
let a1 ="hello"
let b1 = "hello"
console.log(a1==b1)   //true
console.log(a1 === b1) //true

//
let x = new String("Hello");
let y ="Hello";
console.log(x==y)   //
console.log(x === y)   //false   (object vs primitive)

//==  - Compares values only 
//=== - Compare values and types

console.log(5 === "5") //false  num vs str
console.log(true === 1)   //false
console.log(null === undefined) //diff type

//==
console.log(5 == "5") // true 
console.log(true == 1) //teue
console.log(null == undefined) 