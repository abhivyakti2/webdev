const express=require('express');
const app=express();
const PORT=4440;
app.get('/', (req,res)=>{
    res.send('Hello World!');

})
app.get('/greet', (req,res)=>{   // ?parameter
    const name=req.query.name;

    console.log(req.query)
    res.send(`Welcome to the app, dear ${name}`);
    
})
app.get('/greet/:name', (req,res)=>{    // greet/parameter
    const name=req.params.name;

    /*
    req.params={
        name: 'kartik'
    }
    */
   
    // console.log(req.query.name)
    res.send(`Welcome to the app, ${name}`);
    
})
app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
})

