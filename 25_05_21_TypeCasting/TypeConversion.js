//Type conversion (Explicit)

// String()
// Number Boolean

//Convert to string
let num = 22;
let str = 22;

console.log(num)
console.log(str)
console.log(typeof(num))
console.log(typeof(str))

let str1 = String(num);
console.log(str1)
console.log(typeof(str1))

//Convert to Number 
let str2 = '5667'
console.log(typeof(str2))

let num2 = Number(str2);
console.log(typeof(num2))


//convert to Boolean
console.log(Boolean(1))  //True
console.log(Boolean(0))  //fals
console.log(Boolean("Hello"))  //True
console.log(Boolean(""));

//2.Type conversion(Implicit)

let Result = "Age is"+ 25  //Number is converted to string 
console.log(Result)
console.log(typeof(Result))

//Strig to number
console.log("20"-5) //15
console.log("20"*5) //100
console.log("20"/5) //4

console.log(true + 1)  //2
console.log(false + 1) //1

"c",   //String
'c',  //String
`c`   //

//System.out.println("Hello")
//Consloe.log("Hello")
//print("Hello")