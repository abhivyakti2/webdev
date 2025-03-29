const fs= require('fs');
const path=require('path');
let filename=path.join(__dirname, 'song.txt');
fs.writeFile(filename, "Hello World", (err)=>{
    if(err) throw err;
    console.log("File written successfully");
})