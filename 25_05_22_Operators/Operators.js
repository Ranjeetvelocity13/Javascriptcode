//Arithmetic operators
// 1. Addition
// 2. Substraction
// 3. Multiplication
// 4. division
// 5. Modulus
// 6. Increment
// 7. Decement


let a = 10
let b = 3

console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a%b)
console.log(a*b)

a++
console.log(a)
b--
console.log(b)

//Assignment Operatiors
// 1. Assigment =
// 2.add and assign +=
// 3.Substract ans assign -=

let x  = 10
x += 5;
console.log(x)

let x1 = 10
x1 -= 5;
console.log(x1)

//Comprasion operators

//1.Equal to - ==
//2. Strict equal to (type +value) ===
//3.No equal !=
//4.less than <
//5.greater than >
//6.Less than or equal to <=
//7.greater than or equal to >=

//Logical operators
//1. And op - &&
//2, Or operator ||

//Ternart operator 
//?
//constion ? value if true : value if false

let p = 10
let q = '10'
console.log(p == q)  //true
console.log(p === q) // false
console.log(p != q)//false
console.log(p !== q) //true

console.log(p > 19) //false
console.log(p < 13)  //true

console.log(p >= 10) //true
console.log(p <=11)  //true

//Logical 

let islog  = true
let isad = false
// T && T  - T
// T && F  - F
// F && T  - F
// F && F  - F

//OR 
// T || T - T
// T || F - T
// F || T - T
// F || T - F
console.log(islog && isad) // false
console.log(islog || isad)  //true


// Ternary Operator
//constion ? value if true : value if false

let age = 110
let msg = (age >=18) ? "Adult " : "Minor";
console.log(msg)

let msg1 = (age <=18) ? "Adult " : "Minor";
console.log(msg1)