//A constructor in javascript is a spcial fucntion used to creare and initialize object 

//cinstructor function syntax

function Person(name,age){
 this.name  =name ;
 this.age  = age;

 this.greet  =function(){
    console.log(`Hi I am ${this.name}`)
 }
 
}

//this .name  and this .age  refre to properties that will assignt ot the object
//Persion

let person1 = new Person("Rohit",35)
person1.greet();

let rr = [1, 2, 3]; // [3, 2, 1]
rr.reverse();
console.log(rr);

["a", "b", "c"].reverse(); // ["c", "b", "a"]