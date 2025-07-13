//Map is a collection of key-value paris 
//keys can be any type(object number)


//creatig Map



// const myMap1 =new Map(
// ['Name' ,"Rohit"],
// ['Age',40],
// ["isstudent",false]
// )

//common method
// 1.Set(key,value)

// Addes a new key=value parseInt
const myMap = new Map();
myMap.set("Name" ,"Virat")
myMap.set("age" ,30)
myMap.set("isstudent" ,true)
console.log(myMap)

//get(key) - gets the value associated with key

console.log(myMap.get("Name"))
console.log(myMap.get("age"))

//has - checks is a key exists in the map

console.log(myMap.has("age"))//true
console.log(myMap.has("age1"))//true

//delete
// myMap.delete("isstudent")
// console.log(myMap)

//clear
// myMap.clear()
// console.log(myMap)

console.log(myMap.size)


for(const [key,vlaue] of myMap){
    console.log(`${key}: ${vlaue}`)
}


myMap.forEach((value,key) =>{

    console.log(`${key}: ${value}`)
})