//Hybrid Inheritance - Combination of multiple types


class ElectronicDevices{  //Single inhertiance

    trunon(){
        console.log("Device is on")
    }
}
class Mobile extends ElectronicDevices{  

    call(){
        console.log("Callng")
    }
}
class SmartPhone extends Mobile{

   Internet(){
    console.log('Internet')
   }
}

class FeatureMObile extends Mobile{
    playgame(){
        console.log("Playing game")
    }
}

// prent - child 1
//         Child 2


