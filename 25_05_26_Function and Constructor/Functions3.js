//Login Function

function validateLogin(username, Passsword){

    const validuser = "Admin";
    const validPass = "12345"

    return username === validuser && Passsword === validPass;
}
// console.log(validateLogin("Admin","12345"))
console.log(validateLogin("Admin","12345"))  //fasle


//Calcualtor Discount


function calculateDiscount(price, Discountprecentaget){

    return  price -(price * (Discountprecentaget)/100);
}
console.log(calculateDiscount(1000,10))   //90

//Check Prime number 

function isPrime(num){
    if (num <= 1)return false;

    for(let i = 2 ;i<num ;i++){
        if(num % i ===0)
            return false;
    }
    return true;
}

console.log(isPrime(15))