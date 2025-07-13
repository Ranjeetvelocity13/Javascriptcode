// Abstraction is a programming concept that hides complex implementation details
// and exposes only the essential features of an object or system.
// Abstraction helps in reducing complexity and increasing reusability.
// How to implement abstraction in JavaScript?
// JavaScript does not support true abstraction like Java, C++, or C#,
// but abstraction can still be achieved using functions, objects, and classes.

class BankAccount{

      #balance; 
      constructor(initalbalance){
        this.#balance = initalbalance
      }
      deposit(amount){
         if (amount >0) this.#balance +=  amount
      }
      getBalance(){
        return this.#balance
      }
}


const account = new BankAccount(1000);
account.deposit(500) //500
console.log(account.getBalance())  //1500

