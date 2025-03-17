var x=-10;
function helloWorld(){
    console.log(x)   // UNDEFINED!
    var x="hello World"   // HOISTED INSIDE FUNCTION
    console.log(x)
}
helloWorld()

{
    var y="hello world"
}
console.log(y)  // prints "hello world", var not block, functional!!!!! hoisted at top of file
{
    let z="let element block scope only"
}
console.log(z) //undefined