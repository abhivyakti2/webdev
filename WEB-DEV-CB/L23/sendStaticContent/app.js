const express=require('express');
const PORT=4002;
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname, 'public')));



//DOESN'T WORK BECAUSE WE ARE USING INDEX.HTML FROM PUBLIC FOLDER
app.get('/', (req, res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})