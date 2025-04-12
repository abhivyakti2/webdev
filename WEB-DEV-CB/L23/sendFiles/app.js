const express=require('express');
const PORT=4000;
const app=express();
const path=require('path');


//SENDING FILE LIKE THIS WORKS BUT NOT MANAGABLE

// app.get('/', (req, res) => {       
//     res.send(`<!DOCTYPE html>
// <html lang="en">

// <head>
//     <title>Document</title>

//     <script>
//         console.log("Hello world");
//     </script>
// </head>

// <body>
//     <h1 style='background-color: black; color: white;'>Hello world</h1>

//     <p style="background-color: orange;">Welcome to my app, I am a para</p>
// </body>

// </html>`)

//     })

app.get('/', (req, res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/script.js',(req,res)=>{
    res.sendFile(path.join(__dirname, 'script.js'));
})
app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname, 'style.css'));
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})