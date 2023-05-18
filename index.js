const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

// Code Here
// Define a class named "Employee".
// Inside the class, create a constructor method that takes four parameters: name, position, yearJoined, and salary.
// Inside the constructor method, assign the parameter values to respective properties of the class using the "this" keyword.
// Create a method called idBadge that returns the Employee's position and first name in the following format:
// <position>: <First Name></First>

class Employee {
  name = "Meshari";
  position = "ceo";
  yearjoined = 2022;
  salary = 2000;

  getrespective(myEmployee) {
    this.Employee = myEmployee;
  }
  idBadge() {
    return position + this.name;
  }
}

const employee = new Employee();

// Define a class named "Manager" that extends the "Employee" class.
// Inside the class, create a constructor method that takes five parameters: name, position, yearJoined, salary, and bonusPercentage.
// Inside the constructor method, call the super() function to invoke the constructor of the parent class (Employee).
// Assign the bonusPercentage parameter value to a new property called "bonusPercentage" of the Manager class.
// Create a method called salaryIncrease that will receive a parameter called increaseAmount that will increase the salary of the manager.

class Manager extends Employee {
  constructor(
    name,
    position,
    yearjoined,
    salary,
    bonusPercentage,
    increaseAmount
  ) {
    super(name, position, yearjoined, salary);

    this.bonusPercentage = bonusPercentage;
    this.increaseAmount = increaseAmount;
  }
  salaryIncrease(Employeeincreas) {
    return Employeeincreas + this.salary.Manager * 2;
  }
}

// ## Step 3: Create Employee and Manager Instances

// 1. Create instances of the Employee class using `map` and store them into a variable called `employees` using `employeesJSON`.
// 2. Create instances of the Manager class using `map` and store them into a variable called `managers` using `managersJSON`.
// 3. Create a method called `logManagerInfo`. It should follow this format:
//    ```shell
//    <name>
//    since <workingYears>
//    Bonus % <bonusPercentage>
//    ```
