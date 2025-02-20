function helloWorld(){   //higher order function
    console.log("hello world")
}
function callFunc(fun){
    fun();
}
callFunc(helloWorld)