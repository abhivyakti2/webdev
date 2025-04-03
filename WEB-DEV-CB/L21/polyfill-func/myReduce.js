let arr1=[1,2,3,4,5];
let arr2=[5,4,3,2,1];

Array.prototype.myreduce=function(cb, initialAcc){

    let originalArr=this;
    if(initialAcc!=undefined){
        start=0;
    }
    else{
        start=1;
        initialAcc=originalArr[0];
    }
    for(let i =start;i<originalArr.length; i++){
        initialAcc=cb(initialAcc, originalArr[i], i, originalArr);
    }
    return initialAcc;

}

let newArr=arr1.myreduce((acc,val,i,a)=>{
    return acc+val;
})

console.log(newArr);

