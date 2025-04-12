const express=require('express');
const path=require('path');
const PORT=5000;
const app=express();

app.use(function(req,res,next){
    console.log('Middleware 1');
    next();
})
app.use(function(req,res,next){
    console.log('Middleware 2');
    next();
})
// Path start match
// Will run for: /greet, /greet/hello, /greet/abc/def/..../xyz
// Will not run for: /greet-hello, /greethello
app.use('/greet', function (req, res, next) {
    console.log("Middleware 3")
    next();
})

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/greet', (req, res) => {
    res.send("Aaiye!!! Welcome");
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})