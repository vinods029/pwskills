// 3. Car Description Class.
// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.


class Car{

    constructor(){
        this.company = "Skoda";
        this.model = "Rapid";
        this.year = 2022;
    }

    getDescription(){
        console.log(`This is a ${this.year} ${this.company} ${this.model}`);
    }

}

const car1 = new Car()
car1.getDescription()