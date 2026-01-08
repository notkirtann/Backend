//javascript do have oops introduced in ES6 but is mainly prototype language just provide familar nature for people come from C++,Java

//Object

//Why OOPS
//code was becoming messyy
//Object literals
//prtotypes 
// Instances (new,this)

//4 Pillars Abstraction, Encaps, Inhert, Polym

//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}