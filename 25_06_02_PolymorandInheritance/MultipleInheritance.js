//Javascrit does not support multiple inheritance with class keyword.
//Mixins

let canFly = {

     fly(){
        console.log("Flaying")
     }
}

let CanSwim = {
    swim(){
        console.log("Swimming")
    }
}

class Animal{

}
Object.assign(Animal.prototype, canFly, CanSwim);
const  B1 = new Animal();
B1.fly()
B1.swim();