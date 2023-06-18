
// Object Constructure
function Car(name,speed){
    this.name = name;
    this.speed = speed;
    this.run = function(){
        console.log(`${this.name} is running!!!!!!`);
    }
}


// Object Literals
let Carr = {
    Name:"OMNI",
    Speed:200,
    run:function(){
        console.log(`${this.Name} is running`);
    }
}

// Always invoke the Object Constructure as new 
let maruti = new Car("OMNI",200);
console.log(maruti.run());

console.log(Carr.Name);
console.log(Carr.Speed);
Carr.run()






// how to create the Obj through Object

custom_prototype = {
    run:function(){
        console.log(this.Name + " is running");
    }
}


let Obj = Object.create(custom_prototype);
Obj.Name ="Farari"
Obj.speed = 400;

console.log(Obj.run());


