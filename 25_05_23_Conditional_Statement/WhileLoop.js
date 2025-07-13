let i= 1;
while (i <= 15){
    console.log(i);
    i++;
}

//Sum of digit of a numbers
//12345  == 15

let num = 123456
let sum = 0;

while (num > 0){

    sum += num%10
    // sum = sum + num%10
    num = Math.floor(num/10);
}
console.log(sum);


//Revrse number 
///4567  - 7654

let num1 = 4567
let rev = 0;

while (num1> 0){

      let digit =num1%10;
      rev = rev *10 + digit;
      num1 = Math.floor(num1/10);
 
}
console.log(rev);

//for in loop
//for of loop

//syantax
// for(let variable of iterable){
// //iterable - arrays,string
//     //code to be executed
// }

let fruits  = ['apple', 'Mango','Banana']

for(let fruit of fruits){
    console.log(fruit)
}


//for in loop
// for (let key in object){

//     //code to be executed
// }

let person  = {name:"Ketan", age:40, id :234};

for(let key in person){

    console.log(key+ ": "+person[key]);
}
//
//do while

// do{
// console.log(i)
// }
// while(condition);



let ii = 1;
do{
    console.log(ii)
    ii++;
}
while(ii<=5)

// break - exits the loop
for(let i=1 ;i<=5 ;i++){

    if(i==3)
    break;
console.log(i)
}

//continue  - skip the current iteration
for (let i = 1; i <= 5; i++) {
    if (i == 3)
        continue;
    process.stdout.write(i + " ");
}
// public void demo(){

// }