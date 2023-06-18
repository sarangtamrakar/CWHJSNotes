
// custom_prototype = {
//     run:function(){
//         console.log(this.Name + " is running");
//     }
// }


// // how to create the Obj through Object
// let Obj = Object.create(custom_prototype);
// Obj.Name ="Farari"
// Obj.speed = 400;

// console.log(Obj.run());



// // prototype inheritance

// function Employee(Name,Age,experience){
//     this.Name = Name;
//     this.Age = Age;
//     this.experience = experience;
    
    
// }

// Employee.prototype.Description = function(){
//     console.log(`${this.Name} is very Good Employee having ${this.experience} years of Experience`);                                                
// } 



// function Programmer(Name,Age,experience,salary){
//     // inherite all the features of Employee Object
//     Employee.call(this,Name,Age,experience);
//     this.salary = salary;
// }

// // additionally
// Programmer.prototype = Object.create(Employee.prototype);


// Obj = new Programmer("sarang",24,1.5,150000);
// console.log(Obj.Description());









