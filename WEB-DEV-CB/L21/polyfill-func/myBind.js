//bind function works on function
function hello(college,year){
    console.log(this, college, year);
}


let obj={
    name : 'Abhi' 
}
let obj1={
    name : 'Vyakti' 
}

Function.prototype.mybind=function (myObj, ...arg1){
    let fun=this;
     return function(...arg2){
        fun.apply(myObj, [...arg1, ...arg2]);
     }
}

let f=hello.mybind(obj, "IG", 2027);
f();

let g=hello.mybind(obj1,"DTU");
g(2026);