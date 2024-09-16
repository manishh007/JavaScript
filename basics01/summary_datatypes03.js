/* Primitive data types
7 Types
String, number, Boolean, Null, undefined(initiated but not defined), Symbol, BigInt*/

//example
const value = 10   //iska datatype hai number
const valueDeci = 10.4     //iska datatype hai number

const tempOut = null     //iska datatype hai object

let unifer; //undefined     //iska datatype hai undefined

const id = Symbol("123")    //iska datatype hai symbol
const idNew = Symbol("123")
console.log(id === idNew);



console.log(id);



/*Reference (Non Primitive)
Array, Objects, Functions*/

const characters = ["Bheem","Raju","Chutki"]
let com = {
    name : "manish",     //iska datatype hai object
    age :20,
}

const myFunction = function() {
    console.log("Hello World");      //iska datatype hai function

    
}

console.log(typeof id);




