class Customer2 {
    private firstName: string;
    private lastName: string;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let customer2 = new Customer2("John", "Doe");
customer2.greeter();