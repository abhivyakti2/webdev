
console.log('before function declaration',helloWorld)
var helloWorld=function(){    // var -> hoisting    // let no hoisting, reference error
    console.log("Hello World")
}
console.log('after function declaration',helloWorld)
// var helloWorld=0;    can do reinitialization
console.log('before function declaration',sayHello)
function sayHello(){
    console.log(" say Hello")
}
console.log('after function declaration',sayHello)
// VAR SCOPE - FDUNCTIONAL SCOPE