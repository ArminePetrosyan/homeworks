//6
// varTest- 1, 1 - var is function scoped and accessible throughout the function
//letTest - 1, ReferenceError -let  is only accessible within the block
//constTest - 1, ReferenceError - same for here

//7
//a - undefined
//b  -ReferenceError
//c - ReferenceError

//8
//a - 2 - it isn't changed
//b - 3 - incremented by 1

//9
//c - [1,2,3,4]
//d - [1,2,3,4] - d references the same array as c, so both will be changed

//10
//a -[1,2,3]
//b - [1,2,3]- same reference

//a-[1,2,3]
//b-[4,5,6] - created new array, and refs are different

//11
//x - [1,2,3,4] - function gets a's reference and push 4
//x - [4,5,6,7] - reassignment creates new array and makes x reference it

//a - [1,2,3,4] - a doesn't change

//12
//obj.a - 42- var obj creates a ref in memory foo modifies it's property

//13
//x - 10 - it isn't changed
//y - 11 - incremented by 1

//14
//arr1- [1,2,3,4]
//arr2- [1,2,3,4]- arr2 refers arr1, so changes treat both

//15
//arr1 - [1,2,3] - stays the same refs are different
//arr2 - [4,5,6] - creates new array

//16
//myObj.key - 'newValue'- foo modifies key

//17
//myArray - [4,5,6,7] -mutateArray creates a new array

//18
//myObject.a - 99 - var myObject creates a ref in memory updateProperty modifies it's property

//19
//num - 6 function will increment num by1
//myNumber - will stay the same

//20
// will be 8 - function will be hoisted and called

//21
//will be 20 - function will be called

//22
//foo - foo(){}
//foo - bar

//23
//foo - foo(){} -  function  will be hoisted first

//24
//bar - undefined
//bar - 100
//baz - reference error

//25
//foo - undefined
//bar - reference error
//foo - 'hello'

//26

// '12'
//  2
//  20
//  5
//  NaN
//  1
//  false
//  false
//  true
//  false
//  true
//  123
//  NaN
//  1
//  0
//  0
//  NaN
//  '123'
//  'true'
//  'false'
//  'null'
//  'undefined'
//   true
//   false
//   true
//   false
//   false
//   false
//   true
//   true
//   true
//   true
//   true
//   false
//   true
//   false
//   true
//   true
//   true
//   true
