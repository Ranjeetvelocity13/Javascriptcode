class Account{

    publicName  = "Rohit Patil";  //Public
    #accoountNumber  = "12345678";  //Private
    _balace = 100000  //Protected

    getAccountInfo(){

        return `Account holder Name :${this.publicName}, Balance : ${this._balace}`
    }

    #getAccountNuber(){
        return this.#accoountNumber;
    }
    showPrivateInfo(){

        return `Accont No :${this.#getAccountNuber()}`
    }
}

const acc = new Account();
console.log(acc.getAccountInfo())  //public and pro
console.log(acc.showPrivateInfo())  

// console.log(acc.#accoountNumber); //erro
// console.log(acc.#getAccountNuber) //error
