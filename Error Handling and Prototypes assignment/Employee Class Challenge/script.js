// 4. Employee Class Challenge.
// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.


class Employee{

    constructor(){
        this.name = "Kamal Singh";
        this.position = "Sr Support Manager";
        this.salary = 80000;
    }

    getSalary(){
       console.log(this.salary);
    }
}


emp = new Employee()
emp.getSalary()  