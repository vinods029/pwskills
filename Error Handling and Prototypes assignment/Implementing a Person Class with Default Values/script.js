// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.


class Person{

    constructor(n= "unknown", a = 0){
        this.name = n;
        this.age = a;
    }

    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


const person1 = new Person("Mithun" , 20);
person1.getDetails()

const person2 = new Person();
person2.getDetails()