export class Customer3 {
    private firstName: string;
    private lastName: string;
    private Age = 0;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge() {
        console.log(`Age: ${this.Age}`);
    }

    constructor(firstName: string, lastName: string, Age = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
}

let customer3 = new Customer3("John", "Doe", 25);
customer3.greeter();
customer3.getAge();

