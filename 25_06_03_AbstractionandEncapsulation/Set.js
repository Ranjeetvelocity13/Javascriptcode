// Set is a built in object that let store uniquew value of any type whether 
// primitive value ot object refrence

//creitng Set

const myset = new Set();


const mySet1 = new Set(["Test","Dell",10]);
console.log(mySet1);


const colors  = new Set();

//Add method
colors.add("Red")
colors.add("Blue")
colors.add("Green")
colors.add("Red")  //Duplciate

console.log(colors)

//Size
console.log(colors.size)

//delete
colors.delete("Green");
console.log(colors);

//has - Checks if a value exists in the set .retun (boolean)

console.log(colors.has("Blue1")) //false
console.log(colors.has("Red")) //true


//4.clear - remove all elemets from the set

// colors.clear();
// console.log(colors)

//5. forEach(call back)

const letters  = new Set(['a','b','c','x'])

letters.forEach(value =>{
    console.log(value)
    console.log(value.toUpperCase())
})


const colors1  = new Set();

//Add method
colors1.add("Red")
colors1.add("Blue")
colors1.add("Green")

for(const color of colors1 ){
    console.log(color)
}