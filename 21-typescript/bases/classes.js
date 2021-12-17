var Person = /** @class */ (function () {
    function Person(fistName, lastName, age) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
var moi = new Person("Christian", "Lisangola", 29);
console.log(moi);
