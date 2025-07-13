class Calcualtor{

    static add(a,b){
        
        return a+b;
    }
}

console.log(Calcualtor.add(4,5))
const c1 = new Calcualtor();
// console.log(c1.add(10,20));

//static
class AppInfo{

    static version = "1.3.0"

    static getVersion(){
        return `App version : ${AppInfo.version}`
    }
}
console.log(AppInfo.getVersion())

//Belog to class itself   , belogs to indivdual object(instance)
//classanme.methodname   , obj ref(obj.method())
