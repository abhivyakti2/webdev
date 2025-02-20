
// function callFunc(){
//     let a=10, b=20
//     function add(a,b){   //higher order function 
//         return a+b
//     }
//     return add //a and b lost after this, how to handle? !!!!!!!!!CLOSURE!!!!!!!!!
// }
// let a=callFunc()
// a()
// console.log(a())



function createCounter(){
    let cnt=0;
    return function(){
        cnt++
        return cnt
    }
}
let c1=createCounter();
let c2=createCounter();

console.log(c1())
console.log(c1())
console.log(c1())
console.log(c1())
console.log(c2())
console.log(c2())
console.log(c2())
console.log(c2())

