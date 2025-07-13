class Animal{
    speak(){

        console.log("Animal Speaks")
    }
}

class Dog extends Animal{
speak(){
       console.log("Dog Barks")
    }

}

class cat extends Animal{
    
    speak(){
       console.log("Cat meows")
    }

}

// let C1 = new cat();
// C1.speak();

// let A1 = new Animal()
// A1.speak();

// let D1= new Dog()
// D1.speak();

const animal  = [new Animal(),new cat(),new Dog()]

animal.forEach(a1 =>{
    a1.speak()
});

//Method overlaoign
//Javascript does not supoort method oberloading directly liek c++, java
//but we can simulate it 
class Calculator{

    add(a,b,c){
        if(c !== undefined){
            return a+b+c
        }
        return a+b
    }
}

const Cal = new Calculator();
console.log(Cal.add(2,3))
console.log(Cal.add(2,3,5))

