"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.info = function () {
        console.log(this.name);
        console.log(this.age);
    };
    return Person;
}());
exports.Person = Person;
