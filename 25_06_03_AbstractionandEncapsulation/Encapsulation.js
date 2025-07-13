/* 
Encapsulation is a core principle of OOP (Object-Oriented Programming).
It refers to the practice of bundling data (variables) and the methods 
that operate on that data into a single unit (i.e., a class).

Why use encapsulation?
1. To protect the internal state of an object from outside interference.
2. To make code easier to understand, maintain, and debug.
3. To implement data hiding for better abstraction.

*/
class car{

    #speed = 0;  //pricate filed

    accelarate(value){
        if (value >0 ) this.#speed += value 
    }

    getSpeed(){
        return this.#speed;
    }
}

const car1  = new car();
car1.accelarate(60);    //60
console.log(car1.getSpeed())
console.log(car.#speed)  //private 

//