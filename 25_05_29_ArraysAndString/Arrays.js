// What ia an Array

// An array is a list like structure used to store multiple values in single variables

let fruits = ["Apple", "Banana", "Cherry"]
//Arrays use square brackets []
//Values are seprated by commas,
//index starting from 0

// let score = [20,30,40]  //0 1 2

// let mixed  = ["Ketan", 30, true]

//Accessing array elements
console.log(fruits1[0])  //Apple
console.log(fruits1[2])  //Apple
console.log(fruits1[20])  //Apple  //

// Array Methods
// 1.push() - Add to end 

let numbers = [1,2,3]
console.log(numbers) 
numbers.push(4);   
console.log(numbers) 

//pop() - Remove from end

let lastfruits = fruits.pop();
console.log(lastfruits);  //cherry
console.log(fruits) 

//3.foreach() - loop through all items

let  students  = ["Ketan","Ali","John"]
students.forEach(function(name){
   console.log("Hi :"+name)
})

//shift - Remove the first element from an array
const fruits1= ['Apple',"Banana",'Cherry']; 

const first =fruits1.shift();
console.log(first)  //Apple
console.log(fruits1)

//unshift - add one or more lemement to beginging 

fruits1.unshift("Test")
console.log(fruits1)

//Join - combing all eleemnt if an array into a single string

const demo = [10,20];
const newfruites = fruits1.join('+');
console.log(newfruites)

//Slic - retrun a shadow copy of a portion into array
//slic (index)
let test2 = fruits1.slice(2);
console.log(test2);

//const fruits1= ['Apple',"Banana",'Cherry']; 
let test22 = fruits1.slice(1,2);   //Incluse ex
console.log(test22);

let test33 = fruits1.slice(1,3);   //Incluse ex
console.log(test33);  //Incluse ex


//Splice - remove w element starting at index 1

const  arr =[1,2,3,4,5];
arr.splice(1,2)  
console.log(arr)

const  arr1 =[1,222,3,455,56];
if(arr1.length === 0){
   console.log("Array length is 0")
}
else{
   let  max  = arr1[0]
for(let i=1 ;i < arr1.length ;i++){
   if(arr1[i] > max){
      max = arr1[i];
   }
}
console.log(max)
}

//Type convertion
let str1 = "123"  
console.log(typeof(str1))
let num1 =Number(str1)
console.log(num1)
console.log(typeof(num1))

let str2 = "123.45"
let num2 = parseInt(str2);
console.log(num2)

let str3 = "123.45"
let num3 = parseFloat(str3);
console.log(num3)