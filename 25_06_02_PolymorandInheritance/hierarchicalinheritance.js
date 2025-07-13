class Vehical{   //Parent class
    start(){

        console.log("Vehical Started")
    }
}

class Car extends Vehical{  //Child class
    driver(){
        console.log("Car driving")
    }
}

class Bike extends Vehical{
    ride(){
        console.log("Bike Riding")
    }
}

let V1 = new Vehical()
V1.start();
// V1.ride();

let C1 = new Car()
C1.driver()
C1.start()

const B1  = new Bike()
B1.ride()
B1.start()

//
