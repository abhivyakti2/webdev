const express=require('express');
const app=express();

app.get('/', function(req,res){
    // console.log(req);
    res.send('Hello World');
})

app.get('/hello', function(req,res){
    // console.log(req);
    res.send('<h1 style="background-color : black; color : white;">Hello! I am computer</h1>');
})












app.listen(4444);