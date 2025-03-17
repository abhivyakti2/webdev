
console.log('before function declaration',helloWorld)
let helloWorld=function(){    //ReferenceError: Cannot access 'helloWorld' before initialization
    console.log("Hello World")
}
console.log('after function declaration',helloWorld)
// let helloWorld=0; cant reinitialize let
// LET SCOPE - BLOCK 
console.log('before function declaration',sayHello)
function sayHello(){
    console.log(" say Hello")
}
console.log('after function declaration',sayHello)