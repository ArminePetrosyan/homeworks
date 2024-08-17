function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const student = new Person("Test", "Testovich");
// console.log(student.fullName());
