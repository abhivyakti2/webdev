const fs=require('fs');
const path=require('path');
let filename=path.join(__dirname,'song.txt');

const data=fs.readFileSync(filename, 'utf-8'); // DOESN't TAKE CALLBACK FUNCTION
console.log(data);