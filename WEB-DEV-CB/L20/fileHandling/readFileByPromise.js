const fs=require('fs/promises');
const path=require('path');
let filename=path.join(__dirname,'song.txt');

fs.readFile(filename, 'utf-8')
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err.message)
})