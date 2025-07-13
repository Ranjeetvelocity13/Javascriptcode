//Polymorphism - many forms 
//it allows the same method name to behave differnelty depending on the object it class that is 
// using it
//Types of ploy
// 1.Compile time  - 
// 2.Run time poly 

// Method overloaing - Same function ,different parameter 
// Method overriding  -  Same method behaves differently in derived clasess

class Test{

    Demo(name){
        console.log(name)
    }
      
    Demo(){
        console.log("Hi")
    }
}
let L1 = new Test();
L1.Demo("Test")


///Rune time poly  - method overriding