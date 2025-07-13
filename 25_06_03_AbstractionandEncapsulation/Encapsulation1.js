class BankAccount{

    #balance ;   //1000
    constructor(initAmount){
        this.#balance = initAmount;
    }

    deposit(amount){
        if (amount>0) this.#balance += amount 
    }
    withdraw(amount){
    
        if(amount>0 && amount <= this.#balance){
            this.#balance -= amount
        }
        else{
            console.log("Invalid withdrawal")
        }

    }
    getBalance(){
        return this.#balance
    }
    getBalance(){
    console.log("Hi")
    }
}
const acc = new BankAccount(5000);
acc.deposit(3000);  //8000
acc.withdraw(2000)  //2000
console.log(acc.getBalance())  //6000
