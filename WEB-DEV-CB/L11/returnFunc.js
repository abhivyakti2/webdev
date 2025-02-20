
function callFunc(){
    function helloWorld(){   //higher order function 
        console.log("hello world")
    }
    return helloWorld
}
let a=callFunc()
console.log(callFunc())
a()
