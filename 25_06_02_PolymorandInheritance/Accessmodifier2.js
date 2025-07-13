//Protected 
class Parent{
  
    constructor(){
        this ._data  = "Protected  data"  
    }
}
class Child extends  Parent{
     
    _datashowdata(){
        console.log(this._data);  //
    }
}

const obj = new Child();
obj.showdata(); 

//