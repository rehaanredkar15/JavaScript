class Employee {

    constructor(givenname, givenExperience,givenDivison) {
        this.name = givenname;
        this.experience = givenExperience;
        this.division = givenDivison;
    }
    slogan() {
        return `I am ${this.name} and this company is the best`;
    }
}

harry = new Employee("Harry",56,"Division");
console.log(harry);