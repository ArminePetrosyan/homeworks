//Task3
//false - obj1.prototype is undefined because plain objects don't have a prototype, obj2.__proto__ is Object.prototype, so result is false

//Task4
//false - foo.prototype is an object that will be used for instances of foo with new operator , foo.__proto__ points to Function.prototype

// Task5
//true - foo1.__proto__ and foo2.__proto__ point to Function.prototype, therefore they share the same prototype
//false - because each function gets its own unique prototype object

//Task6
//false -  arrow functions do not have a prototype,foo.prototype is undefined, Function.prototype is an object, not undefined

// Task7
//false - primitive values don't have a prototype property, so will be false
//true - JS str.__proto__ wraps in String object, so will be true
