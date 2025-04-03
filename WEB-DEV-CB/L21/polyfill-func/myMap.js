let arr1=[1,2,3,4,5];
let arr2=[5,4,3,2,1];

Array.prototype.mymap=function(cb){

    let originalArr=this;
    let newArr=[];
    for(let i =0;i<originalArr.length; i++){
        let newVal=cb(originalArr[i], i, originalArr);
        newArr.push(newVal);
    }
    return newArr;

}

let newArr=arr1.mymap((e,i,a)=>{
    return e*e;
})

console.log(newArr);


