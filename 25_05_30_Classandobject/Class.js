// Class in javascript
//A class is a blueprint for crearting objects with pre define properties and method

//syntax

class Person{  //class name is person
    greet(){
    console.log("Hello Javascript")
    }
}

//Object in javascript
//An object is an instance of a class, You can object using the new keyword
//classname objrefvarname =  new classname()

const person1  = new Person();
person1.greet();


class Car{
    //Method
    start(){
        console.log(`${this.brand} is starting`)
    }
    drive(){
     console.log(`${this.brand} is draving`)
    }
}

//creating object
const mycar = new Car();
//assigning properties manually
mycar.brand = "Toyota";
mycar.start()
mycar.drive()


//What is a constructor in javascript
// A constructor is a special method inside the class that automatically run when u create 
// an object it's to initalize object properties

// class Demo{
//      constructor(Parameter1, Parameter2,...){
//         this.propertiy1 =Parameter1;
//         this.propertiy2 = Parameter2;
//      }
  

//     //method
//     methodname(){
//          //code
//     }
// }
//Person class with constructor

class TestPerson{

    constructor(name,age){
        this.name = name;
        this.age =age;
    }
    demo(){
       console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old }`) 
    }
}
const P1 = new TestPerson("Ravi",40);
P1.demo();


