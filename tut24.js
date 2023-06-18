// ES6 Classes


class Employee {
    constructor(Name, Age, Experience) {
        this.Name = Name;
        this.Age = Age;
        this.Experience = Experience;
    }

    Details() {
        console.log(`${this.Name} is very humble employee of Flutura`);
        return Employee.sum(2, 3);
    }

    static sum(a, b) {
        return a + b;
    }
}  







// Obj = new Employee("sarang",24,2);
// console.log(Obj.Details());



// Inheritance
class Manager extends Employee {
    constructor(Name, Age, Experience, Salary) {
        super(Name, Age, Experience);
        this.Salary = Salary;
    }

    favouriteLang(){
        console.log("I love puthon language");
    }
}


Obj = new Manager("sarang",24,2,"1.6Lacs");
console.log(Obj.Details());
console.log(Obj.favouriteLang());

