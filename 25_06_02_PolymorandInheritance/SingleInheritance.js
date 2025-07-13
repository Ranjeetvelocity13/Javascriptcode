// 1.Inheritance
// 2. Polymorphism
// 3. Abstraction
// 4.Encapsulation

//Inheritance
//Inhertiance allows a class (child/subclass)to acquire properties and method of another class 

//Types of inhertnace
// 1.Single inhertitance
// 2.Multi-level inhertnace
// 3.Hierarchical inhertnace
// 4.Multiple inhertnace
// 5. Hubrid inhetiavce

//1.Single inhertitance
class Animal {  //Parent class

    eat(){
        console.log("Earting..")
    }
}

class Dog extends Animal{  //Child class
    bark(){
        console.log("Barking..")
    }
}
//Classname rvn = new classanme()
const dog = new Animal() 
dog.eat();
// dog.brark();
console.log("*****")

const D1 = new Dog();
D1.eat()
D1.bark()


//Multilevel inhertiance