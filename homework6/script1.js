// Task 1
//1. logThis();- output window, because this refers to the global object
//2. myObject.logThis(); - output myObject, logThis is method of myObject and this inside of it refers the object through which the function was called, so it refers myObject

//Task 2
//1. obj.logThis() - output obj,this refers tp obj
//2. obj.callLogThis() - output obj, callLogThis is also a method of obj and console.log(this)will also output obj

//Task 3
//1. obj.regularFunction()- will log obj
//2. obj.arrowFunction() - arrow function doesn't have own this, so it inherit this from lexical scope, in this case from window global object

//Task4
// output- 17 , we have an immediately invoked arrow function in obj's foo method so this is lexically scoped,this.age = num assigns 17 to obj.age, so will be 17

//Task5
// First call
// 10 - arguments[0]?.a will access the a property of the first argument
// undefined - this.a  will refer to the a property of the global object, and if there is no a it's undefined

// Second call
// undefined - because no arguments are passed
// 777 - this.a refers to obj.a

// Task6
//obj.showAge()  - 1) 22, 2) 22- arrow function inherits this from lexical scope
//obj.showArrowAge() - undefined - because this in showArrowAge refers to the global object, and there isn't age property

// Task7
// boundFunction()- { name: 'Specific Object' }- new function where this is bound specificObject, so log will be specificObject
// logThis.call(specificObject)- { name: 'Specific Object' }- call method invokes logThis with this set to specificObject
// logThis.apply(specificObject)- { name: 'Specific Object' } - same for here

// Task8
//obj.foo(logger) calls the foo function with logger as the argument, in foo function , in this case logger calls with this, foo is called as method of obj, so fn(this) is logger(obj) it will return body of obj, like
// {
//   word: 'hello',
//   foo: Function
// }

// Task9
//foo() - 3
//new foo() - 5, because creates a new instance of foo, but IIFE is not bound to the new instance, console.log(this.x) logs 5
//obj.logger() -  4
//new obj.logger() -  undefined, because the new instance created by new obj.logger() does not have an x property
