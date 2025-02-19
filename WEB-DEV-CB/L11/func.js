var a=[1,2,3,4]
console.log(a)
for(var i=0; i<a.length;i++){
    console.log(a[i])
}
var b=[1,3,'are', 'r', true]
console.log(b)
b[10]=10;
b[11]=5;
console.log(b)
for(let e of a){
    console.log(e)
}
for(let e of b){
    console.log(e)
}
