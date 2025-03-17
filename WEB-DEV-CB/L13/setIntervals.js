let n=1;
let id1= setInterval(()=>{
    console.log(n,"seconds passed")
    n++;

},1000)
setTimeout(()=>{
    clearInterval(id1);
},5000);

let id2=setInterval((name)=>{
    console.log(name)
},1000,"hello")
setTimeout(()=>{
    clearInterval(id2);
},5000);