function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`My name is ${this.name}.`);
};

const animal1 = new Animal("Dog");
const animal2 = new Animal("Bunny");

// animal1.speak();
// animal2.speak();
