
// console.log("Reverse String :"+rev)

//Find the factoral of a number 
let number = 5 
let factoral = 1;

for(let i=1 ;i<=number ;i++){
    factoral *= i;
}
console.log("factoral of ", number, "is", factoral)

//Sum all number in an array
let numbers = [10,20,30,40,50];
let sum = 0;

for(let i =0; i< numbers.length;i++){

    sum += numbers[i];
}
console.log(sum);

//Count vowels in a string
let text  = "javascritp loops aa";  //
let count = 0
let vowels ="aeiou"

for(let i=0 ;i<text.length ;i++){
  if(vowels.includes(text[i]))
{
    count++
}
}
console.log(count)


