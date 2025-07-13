///Access modifers control the visibility or accessbility of class  members 
//public ,privte ,protected

//public (default)
//Class mumbers are public by default and can be accces fom outside the class
class car{

    brand  = "Seltos";  //public by  default
    showbrand(){
        console.log(this.brand);
    }
}

const c1 = new car();
console.log(c1.brand)
c1.showbrand();

//Private(#)
//use (#) before a property or method to make it private 

class BankAccount{

    #balance = 1000;  //Private var

    #displayBalance(){
        console.log(`Balance :${this.#balance}`)
    }

    showInfo(){
        this.#displayBalance();  //
    }
}

const acc = new BankAccount();
acc.showInfo();
// acc.#displayBalance();
// acc.#balance