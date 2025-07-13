class Animal{

    eat(){
        console.log("Eating")
    }
}
class Dog extends Animal{  //Child class //eat,bark
    bark(){
        console.log("Barking..")
    }
}
class Human extends Dog{
    speak(){
        console.log("Speakng..")
    }
}

const  h1 = new Human()
h1.speak()
h1.bark()
h1.eat()
