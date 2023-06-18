
function Car(Name, Speed) {
    this.speed = Speed;
    this.Name = Name;
}

Obj1 = new Car("maruti", 200);


// // it's a best practice
// // // always try to define prototype in Car Function not in his obj
// Car.prototype.run = function(){
//     console.log(`${this.Name} is running at ${this.speed} speed`);
// }



// not best practice
Object.prototype.run = function () {
    console.log(`is running at  speed`);
}




// not best practice
Object.prototype.sort = function () {
    console.log(`is running at  speed`);
}



// Obj1.run();