const fs= require('fs/promises');
const path=require('path');
let filename=path.join(__dirname, 'song.txt');
fs
.writeFile(filename, "Hello World", {flag: 'w'})
.then(()=>{
    console.log("File written successfully")
})
.catch(err=>{console.log(err)})