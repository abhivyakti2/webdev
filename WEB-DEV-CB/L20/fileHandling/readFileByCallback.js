const fs=require('fs');
const path=require('path');
let filename=path.join(__dirname,'song.txt');

fs.readFile(filename, 'utf-8', ((err, data)=>{
    if(err) throw err;
   console.log(data);
}))
// UTF 8 ENCODING NEEDS TO BE SPECIFIED OR ELSE --
//     console.log(data);// Binary Data
//     console.log(data.toString()); // String Data 