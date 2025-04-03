let arr1=[1,2,3,4,5];
let arr2=[5,4,3,2,1];




// Polyfill !!!!!

// In software development, a polyfill is code that implements a new standard feature of a deployment environment within an old version of that environment that does not natively support the feature.
Array.prototype.myfilter=function(cb){

//    cb=(e,i,a)=>{
//     if(e%2==0) return true;
//     return false;
// }


    let originalArr=this;
    let newArr=[];

    for(let i =0;i<originalArr.length; i++){
        if(cb(originalArr[i], i, originalArr)){
        newArr.push(originalArr[i]);
    }}
    return newArr;

}

let newArr =arr1.myfilter((e,i,a)=>{
    if(e%2==0) return true;
    return false;
})

console.log(newArr);

