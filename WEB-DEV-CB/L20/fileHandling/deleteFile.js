const fs=require('fs');
const path=require('path');
let filename=path.join(__dirname,'song.txt');

fs.unlink(filename,(err)=>{
    if (err) throw err;
    console.log('File deleted successfully')
})