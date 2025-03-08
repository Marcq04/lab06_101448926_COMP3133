"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer3 = void 0;
var Customer3 = /** @class */ (function () {
    function Customer3(firstName, lastName, Age) {
        if (Age === void 0) { Age = 0; }
        this.Age = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
    Customer3.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer3.prototype.getAge = function () {
        console.log("Age: ".concat(this.Age));
    };
    return Customer3;
}());
exports.Customer3 = Customer3;
var customer3 = new Customer3("John", "Doe", 25);
customer3.greeter();
customer3.getAge();
