//What is  Objects in javascripts
// In javascripts objects are collections of key - values pris , where key are strings 
//and values can be of any data type


const car = {

    brand : "Toyota",
    model : "Canry",
    year : "2025"
};

//SYSO
console.log("Car brand :", car.brand);  //Toyota
console.log("Car model :",car.model)
console.log("Year :", car.year)

//User profile objects (Login, singup and profile page)
//id name email, is loggnied in
const user = {
    id : 101,
    name  : "Ketan",
    email : "Ketan@gmail.com",
    isloggedin : true,

    prerfrence :{
     theme : "dark",
     notification :true
    }
};

console.log(user.id)  //101
console.log(user.name)  //Ketan
console.log(user.prerfrence.theme)  //dark
console.log(user.prerfrence.notification) //

//for in for 
//Product object in e-commerence website
//id,name ,stock,rating,seller

const Product = {
    id : 205,
    name  :"Wireless Mouse",
    price : 1000,
    stock : 50,
    rating :4.6,
    seller :{
     name : "Akash",
     location :"Pune"
    }
//Accessing product properties
}
console.log("Product Proce :",Product.price)
console.log("Product id :",Product.id)
console.log("Product stock :",Product.stock)
console.log("Seller Name :",Product.seller.name)  //Akash

//order detail

const order = {
    orderID  : "ORD1234",
    userID :"101",
    items :[
        {name :"Mouse",quantity :1,price :999},
        {name :"Keyboard",quantity :1,price :1299},
         {name :"Demo",quantity :10,price :1399}
  ],
   totalAmount :2298,
   status : "processing"
}
//access orders details
console.log("Order OD :",order.orderID)  //
console.log("User ID:", order.userID )
console.log("Order Status :",order.status)
console.log("Totla amount :",order.totalAmount)


//foreach loop
console.log("Items :");
order.items.forEach((Test,index) =>{
   console.log(`${index +1}.${Test.name} - Quantity : ${Test.quantity}, Price :${Test.price}`);
});


const weather = {
    city :"Pune",
    temp : 26,
    condition :"Sunny",
    humidity :40,
    forecast : ["Sunny","Cloudy" ,"Rainy"]
};

//Accessing weather detaisl
console.log("City :",weather.city)
console.log("City :",weather.temp)
console.log("City :",weather.condition)
console.log("Forceast :",weather.forecast)

weather.forecast.forEach((day,index) => {
    console.log(`Day ${index} : ${day}`);
});

//
const student ={
    rollno : 15, 
    name :"Kavya",
    subject :["Math", 'Science',"English"],
    marks :{
        Math :85,
        Science : 92,
        English : 80
    },
    average :function (){
        const m = this.marks;
        return (m.Math + m.Science + m.English) / 3;
    } 
}

//Accessing data
console.log("Student Name :",student.name)
console.log("Student RollnO :",student.rollno)
console.log("MArks :",student.marks)
console.log("Avg Marks :",student.average().toFixed(2)) //85.

