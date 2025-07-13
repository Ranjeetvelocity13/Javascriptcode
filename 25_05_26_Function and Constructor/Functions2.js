
//5.IIFE () -  (Immedialtely invoked fucntion expression)
(function() {
    console.log("IIFE Function Executed");
})();

(function(name){
console.log(`Hello, ${name}`)
})("Javascript")

let result = (function(a,b){
    return a+b
})(4,5)
console.log(result)

//Aysuc Function
async function getmessage(){

    return "Hello Async";
}
console.log(getmessage());

getmessage().then(console.log);
