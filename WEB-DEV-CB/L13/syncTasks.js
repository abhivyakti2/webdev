function waitASec(){
    let t1=new Date().getTime();
    while(new Date().getTime()<t1+1000){ 
    }
}
function waitNSec(n){
    for(let i=0;i<n;i++){
        waitASec();
    }
    // console.log(n, " seconds complete")
    console.log(n+ " seconds complete")
}
console.log("HELLO!")
waitNSec(5);
console.log('World');